import React, { useMemo, useRef, Suspense } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import {
  Canvas,
  extend,
  useLoader,
  useThree,
  useFrame,
} from '@react-three/fiber';
import circleImg from '../../public/images/circle.png';

extend({ OrbitControls });

const Stars = () => {
  const count = 5000;
  const circleTex = useLoader(THREE.TextureLoader, circleImg);

  const positions = useMemo(() => {
    const positions = [];

    for (let i = 0; i < count; i++) {
      positions.push(Math.random() * 500 - 250);
      positions.push(Math.random() * 500 - 250);
      positions.push(Math.random() * 500 - 250);
    }

    return new Float32Array(positions);
  }, [count]);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attachObject={['attributes', 'position']}
          array={positions}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        attach='material'
        map={circleTex}
        color='#fff'
        size={0.5}
        sizeAttenuation
        transparent={false}
        alphaTest={0.5}
        opacity={1}
      />
    </points>
  );
};

const CameraControls = () => {
  const controlsRef = useRef();
  const { camera, gl } = useThree();

  useFrame(() => {
    document.body.onscroll = () => {
      const distanceFromTop = document.body.getBoundingClientRect().top + 1;

      camera.position.x = distanceFromTop * -0.1;
      camera.position.y = distanceFromTop * -0.1;
      camera.position.z = distanceFromTop * -0.1;
    };

    controlsRef.current.update();
  });

  return (
    <orbitControls
      ref={controlsRef}
      args={[camera, gl.domElement]}
      autoRotate
      autoRotateSpeed={0.2}
    />
  );
};

const StarCanvas = () => {
  return (
    <Canvas
      style={{
        width: '100%',
        height: '100%',
        position: 'fixed',
        display: 'block',
        top: 0,
        left: 0,
        zIndex: -9999,
      }}
    >
      <Suspense fallback={null}>
        <Stars />
      </Suspense>
      <CameraControls />
    </Canvas>
  );
};

export default StarCanvas;
