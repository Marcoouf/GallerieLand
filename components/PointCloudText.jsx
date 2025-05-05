// components/PointCloudText.jsx
import React, { useRef, useState, useMemo, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { MeshSurfaceSampler } from 'three/examples/jsm/math/MeshSurfaceSampler';
import fontJson from 'three/examples/fonts/helvetiker_regular.typeface.json';

export default function PointCloudText({ text = 'berecouf', count = 20000 }) {
  const pointsRef = useRef();
  const [hoverPos, setHoverPos] = useState(null);

  // Create geometry and compute bounding metrics once
  const { positions, colors, original, bbox } = useMemo(() => {
    const loader = new FontLoader();
    const font = loader.parse(fontJson);
    const geo = new TextGeometry(text, { font, size: 1, height: 0.2, curveSegments: 32 });
    geo.center();
    geo.computeBoundingBox();
    
    const mesh = new THREE.Mesh(geo);
    const sampler = new MeshSurfaceSampler(mesh).build();
    
    const posArr = new Float32Array(count * 3);
    const colArr = new Float32Array(count * 3);
    const temp = new THREE.Vector3();
    const minX = geo.boundingBox.min.x;
    const width = geo.boundingBox.max.x - minX;

    for (let i = 0; i < count; i++) {
      sampler.sample(temp);
      const t = (temp.x - minX) / width;
      posArr[i*3]     = temp.x;
      posArr[i*3 + 1] = temp.y;
      posArr[i*3 + 2] = temp.z;
      colArr[i*3]     = t;
      colArr[i*3 + 1] = 0;
      colArr[i*3 + 2] = 1;
    }
    return { positions: posArr, colors: colArr, original: posArr.slice(), bbox: geo.boundingBox };
  }, [text, count]);

  // Fit camera to bounding box
  const { camera, size } = useThree();
  useEffect(() => {
    // compute vertical and horizontal fov in radians
    const fovRad = THREE.MathUtils.degToRad(camera.fov);
    const hFovRad = 2 * Math.atan(Math.tan(fovRad / 2) * camera.aspect);
    // bounding box dimensions
    const dims = new THREE.Vector3();
    bbox.getSize(dims);
    const boxWidth = dims.x;
    const boxHeight = dims.y;
    // distances to fit width and height
    const distW = (boxWidth / 2) / Math.tan(hFovRad / 2);
    const distH = (boxHeight / 2) / Math.tan(fovRad / 2);
    const distance = Math.max(distW, distH) * 1.2; // padding factor
    camera.position.set(0, 0, distance);
    camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();
  }, [camera, size, bbox]);

  // Animate points on hover
  useFrame(() => {
    if (!pointsRef.current) return;
    const posAttr = pointsRef.current.geometry.attributes.position;
    const a = posAttr.array;
    const radius = (bbox.max.x - bbox.min.x) * 0.15;
    for (let i = 0; i < a.length; i += 3) {
      const ox = original[i], oy = original[i+1], oz = original[i+2];
      let tx = ox, ty = oy, tz = oz;
      if (hoverPos) {
        const dx = ox - hoverPos.x;
        const dy = oy - hoverPos.y;
        const dz = oz - hoverPos.z;
        const dist = Math.hypot(dx, dy, dz);
        if (dist < radius) {
          const f = (radius - dist) / radius;
          tx += (dx / dist) * f * 0.7;
          ty += (dy / dist) * f * 0.7;
          tz += (dz / dist) * f * 0.7;
        }
      }
      a[i]   = THREE.MathUtils.lerp(a[i],   tx, 0.1);
      a[i+1] = THREE.MathUtils.lerp(a[i+1], ty, 0.1);
      a[i+2] = THREE.MathUtils.lerp(a[i+2], tz, 0.1);
    }
    posAttr.needsUpdate = true;
  });

  return (
    <points
      ref={pointsRef}
      geometry={
        new THREE.BufferGeometry()
          .setAttribute('position', new THREE.BufferAttribute(positions, 3))
          .setAttribute('color',    new THREE.BufferAttribute(colors, 3))
      }
      onPointerMove={e => { e.stopPropagation(); setHoverPos(e.point); }}
      onPointerOut={e => { e.stopPropagation(); setHoverPos(null); }}
    >
      <pointsMaterial size={0.02} sizeAttenuation vertexColors />
    </points>
  );
}
