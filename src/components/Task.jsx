/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/models/Task.glb
*/

import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useCharacterAnimations } from '../contexts/CharacterAnimations'

const Task=(props)=> {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./models/Task.glb')
  const { actions, names} = useAnimations(animations, group)
  const {setAnimations,animationIndex}=useCharacterAnimations()
  console.log(names);
  
  useEffect(()=>{
    setAnimations(names)
  },[names]) 

  useEffect(()=>{
    actions[names[animationIndex]].reset().fadeIn(0.5).play()// actions array 
    return ()=>{
      actions[names[animationIndex]].fadeOut(0.5)
    }    
  },[animationIndex])
  console.log(animationIndex)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh castShadow name="vanguard_Mesh" geometry={nodes.vanguard_Mesh.geometry} material={materials.VanguardBodyMat} skeleton={nodes.vanguard_Mesh.skeleton} />
          <skinnedMesh castShadow name="vanguard_visor" geometry={nodes.vanguard_visor.geometry} material={materials.Vanguard_VisorMat} skeleton={nodes.vanguard_visor.skeleton} />
        </group>
      </group>
    </group>
  )
}

export default Task;

useGLTF.preload('./models/Task.glb')
