import {Canvas, useFrame} from '@react-three/fiber';
import {Edges, OrbitControls, Outlines} from '@react-three/drei';
import { useRef } from 'react';

const RotatingCube=()=>{
  const meshRef= useRef();
  useFrame(()=>{
    if(meshRef.current){
      meshRef.current.rotation.y+=0.01
      meshRef.current.rotation.x+=0.01
      meshRef.current.rotation.z+=0.01
    }
  })
  return(
    <mesh ref={meshRef} > 
    <boxGeometry args={[2, 2, 2]} />
    <meshStandardMaterial   color='#1b85d4' emissive='#326790' />
    <Edges lineWidth={3} color={'#000000'} />
    {/* <Outlines lineWidth={2} color={'#000000'} /> */}
    </mesh>
  )
}

const App=()=>{
  return(
    <Canvas shadows style={{height:'100vh', width:'100vw', display:'flex', justifyContent:'center', alignItems:'center', pixelRatio:window.devicePixelRatio}} >
      <OrbitControls enableZoom enablePan enableRotate/>
      <directionalLight  position={[1,1,1]} intensity={10} color={0x9CDBA6} />
      {/* <color attach='background' args={['#000000']} /> */}
      <RotatingCube />
    </Canvas>
  )
}
export default App;