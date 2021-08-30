import { useEffect, useState, useRef } from "react";

import { Button, Container, Divider, Header, Segment } from "semantic-ui-react";

import "../css/App.css";

import TestCanvas from "../components/TestCanvas";
import CustomModelTest from "../components/CustomModelTest";

function App() {
  const canvasContainer = useRef();
  const [canvasSize, setCanvasSize] = useState(300);

  const CanvasObjects = [
    {
      id: "02",
      name: "Custom Model Test",
      desc: "A test of the custom model",
      component: <CustomModelTest canvasSize={canvasSize} />,
    },
    {
      id: "01",
      name: "Testing Canvas",
      desc: "This was my first attempt at generating some kind of scene using threejs. You can click the ball to make it jump.",
      component: <TestCanvas canvasSize={canvasSize} />,
    }
  ];

  const [selectedCanvas, setSelectedCanvas] = useState(null);

  useEffect(() => {
    setCanvasSize(canvasContainer.current.clientWidth);
  }, [canvasContainer.current]);

  useEffect(() => {
    setSelectedCanvas(CanvasObjects[0].id);
  }, []);

  return (
    <Container>
      <Divider hidden />
      <Header as="h1" inverted>
        <Header.Content>
          ThreeJs Testing Page
          <Header.Subheader>
            Created by <a href="https://github.com/teobot">Theo Clapperton</a>{" "}
            showing what could be done using{" "}
            <a href="https://threejs.org/">Three.js</a>.
          </Header.Subheader>
        </Header.Content>
      </Header>
      <Divider inverted />
      {CanvasObjects.map(({ id, name, desc, component }) => {
        return (
          <Segment inverted>
            <Header inverted dividing>
              <Header.Content>
                {name}
                <Header.Subheader>{desc}</Header.Subheader>
              </Header.Content>
            </Header>

            <div
              ref={canvasContainer}
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {id === selectedCanvas ? (
                component
              ) : (
                <div
                  style={{
                    height: canvasSize / 2,
                    width: canvasSize,
                    backgroundColor: "#1b1b1b",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column"
                  }}
                >
                  <Header inverted as="h2">Click to render the canvas</Header>
                  <Button size="large" primary onClick={() => {
                    setSelectedCanvas(id);
                  }}>Render Canvas</Button>
                </div>
              )}
            </div>
          </Segment>
        );
      })}
    </Container>
  );
}

export default App;
