/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/models/Tree.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useState } from 'react'

const Tree=(props)=> {
  const { nodes, materials } = useGLTF('./models/Tree.glb')
  const[color,setColor]=useState("green");
  return (
    <group {...props} dispose={null}>
      <mesh onClick={()=>setColor("pink")} castShadow geometry={nodes.Tree_1.geometry} material={materials['trunk color']} />
      <mesh onClick={()=>setColor("pink")} castShadow geometry={nodes.Tree_2.geometry} material={materials['branch color.001']} material-color={color} />
      <mesh onClick={()=>setColor("pink")} castShadow geometry={nodes.Tree_3.geometry} material={materials['branch color']} material-color={color}/>
      <mesh onClick={()=>setColor("pink")}  castShadow geometry={nodes.Tree_4.geometry} material={materials['branch color.003']} material-color={color}/>
    </group>
  )
}


export default Tree;
useGLTF.preload('./models/Tree.glb')