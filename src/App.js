import { Scroll, ScrollControls, Float, Environment, Sparkles, Loader } from '@react-three/drei';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Butterfly } from './models/Butterfly';
import { EffectComposer, Vignette } from '@react-three/postprocessing';


function App() {

  return (
    <>
      <color attach='background' args={[0x4a4fda]} />
      <ScrollControls pages={1} damping={0.25}>
        <ambientLight intensity={0.2} />
        <spotLight position={[0, 25, 0]} angle={1.3} penumbra={1} castShadow intensity={2} shadow-bias={-0.0001} />
        <EffectComposer>
          {/* <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={5} height={480} /> */}
          {/* <Bloom intensity={2} luminanceThreshold={0.1} luminanceSmoothing={0.9} height={1000} /> */}
          <Vignette eskil={false} offset={.1} darkness={1.5} />
        </EffectComposer>
        {/* 
    ===================================================================================
                          3D STUFF
    ===================================================================================
      */}
        <Scroll>
          <Float
            speed={1} // Animation speed, defaults to 1
            rotationIntensity={2} // XYZ rotation intensity, defaults to 1
            floatIntensity={0.2} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
            floatingRange={[-0.1, 0.1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
          >

            <Butterfly rotation-x={Math.PI * 0.1} scale={0.05} position={[0, -2.3, 0]} />
            <Butterfly rotation-x={Math.PI * 0.5} scale={0.05} position={[-8, 0, -4]} />
            <Butterfly rotation-x={Math.PI * 0.5} scale={0.05} position={[8, 0, -10]} />
          </Float>

          <Sparkles noise={0} count={500} speed={1} size={4} color={"#fff6a3"} opacity={10} scale={[20, 100, 20]}></Sparkles>

        </Scroll>

        {/* 
    ===================================================================================
                          HTML
    ===================================================================================
      */}
        <Scroll html style={{ width: '100%' }}>
          <Container style={{ position: 'relative' }}>
            <Row
              className='text-center align-items-center justify-content-center'
              style={{ position: 'relative', left: '0', width: '100%', height: '80vh', padding: '8px 3px' }}>
              <Col xs={6}>
                <div>
                  <h1 style={{ padding: "100px;", marginBottom: '0px' }}>
                    "Butterflies are nature's angels. They remind us what a gift it is to be alive.”
                  </h1>
                  <p>
                    - Experience By <a className="link-light" target={'_blank'} href="https://github.com/sahilk-027">Sahil K.</a>
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </Scroll>
      </ScrollControls>
    </>
  );
}

export default App;
