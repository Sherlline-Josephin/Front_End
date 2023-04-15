import React from 'react'
import Task from './Task'
import { OrbitControls } from '@react-three/drei'
import Soldier from './Soldier'
import Tree from './Tree'


const Experience = ({ colors, dirIntensity }) => {
 
  return (
    <>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
      <pointLight intensity={-0.1} />
      <hemisphereLight
        args={["#7cdbe6", "#5e9c49", -0.65]}
        groundColor="black" 
      />   
        <ambientLight/> 
        <directionalLight
        position={[-5, 5, 5]}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
        intensity={dirIntensity}
        color={colors}
      />
       
        <group position={[0, -1.5, 0]} scale={[2, 2, 2]}>
          <Soldier/>
          
        </group>
        <group position={[0, -1.5, 0]} scale={[0.5, 0.5, 0.5]}>
          <Tree position={[Math.random() * 80, 0, Math.random() * 100]} />
          <Tree position={[Math.random() * 80, 0, Math.random() * 100]} />
          <Tree position={[Math.random() * 80, 0, Math.random() * 100]} />
          <Tree position={[Math.random() * 80, 0, Math.random() * 100]} />
          <Tree position={[Math.random() * 80, 0, Math.random() * 100]} />
          <Tree position={[Math.random() * 80, 0, Math.random() * 100]} />
         
        </group>
        <mesh rotation-x={[-0.5 * Math.PI]} position={[0, -1.5, 0]} receiveShadow>
        <planeGeometry args={[1000, 1000, 1, 1]} />
        <meshStandardMaterial color={"#458745"} />
      </mesh>
    </>
  )
}

export default Experience



