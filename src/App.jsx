import { Canvas } from '@react-three/fiber';
import Experience from './components/Experience';
import Interface from './components/Interface';
import { useState } from 'react';
import { Stats } from '@react-three/drei';

function App() {
  const [testing, setTesting] = useState(false);
  const [stats, setstats] = useState(false);
  const [colors, setColors] = useState("");
  const [dirIntensity, setdirIntensity] = useState(0.3);
  return (
    <>
      <Canvas shadows camera={{ fov: 75 }}>
      {stats ? <Stats /> : null}
        {testing ? <axesHelper args={[2]} /> : null}
        <Experience colors={colors} dirIntensity={dirIntensity} />
      </Canvas>
      <Interface/>
      <button
        onClick={() => setTesting(!testing)}
        style={{
          position: "absolute",
          width: "70px",
          top: "80px",
          left: "20px",
          cursor: "pointer",
          border: "none",
          letterSpacing: "0.5px",
          color: "black",
          padding: "10px",
          boxShadow: "0px 0px 5px 1px #0ef",
        }}

      >        
        Axes
      </button>
      <button
        onClick={() => setstats(!stats)}
        style={{
          position: "absolute",
          width: "70px",
          top: "140px",
          left: "20px",
          cursor: "pointer",
          border: "none",
          letterSpacing: "0.5px",
          color: "black",
          padding: "10px",
          boxShadow: "0px 0px 5px 1px #0ef",
        }}
      >
        Stats
      </button>
      <input
        type="text"
        value={colors}
        onChange={(e) => setColors(e.target.value)}
        placeholder="DirLight Color"
        style={{
          position: "absolute",
          width: "150px",
          top: "200px",
          left: "20px",
          cursor: "pointer",
          border: "none",
          letterSpacing: "0.5px",
          color: "black",
          padding: "10px",
          boxShadow: "0px 0px 5px 1px #0ef",
          outline: "none",
        }}
      />
      
      <input
        type="text"
        value={dirIntensity}
        onChange={(e) => setdirIntensity(e.target.value)}
        placeholder="DirLight Intensity"
        style={{
          position: "absolute",
          width: "150px",
          top: "260px",
          left: "20px",
          cursor: "pointer",
          border: "none",
          letterSpacing: "0.5px",
          color: "black",
          padding: "10px",
          boxShadow: "0px 0px 5px 1px #0ef",
          outline: "none",
        }}/>
        
    </>
  );
}

export default App;
