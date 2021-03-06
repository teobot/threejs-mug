import { useEffect, useState, useRef } from "react";

import { Button, Container, Divider, Header, Segment, Modal, Menu, Icon } from "semantic-ui-react";

import "../css/App.css";

import TestCanvas from "../components/TestCanvas";
import CustomModelTest from "../components/CustomModelTest";
import CustomModelTexture from "../components/CustomModelTexture";

function App() {
  const canvasContainer = useRef();
  const [canvasSize, setCanvasSize] = useState(300);
  const [modalOpen, setModalOpen] = useState(false);

  const CanvasObjects = [
    {
      id: "03",
      name: "Custom Texture Test",
      desc: "Testing a custom texture canvas on the custom model",
      component: <CustomModelTexture canvasSize={canvasSize} />,
    },
    {
      id: "02",
      name: "Custom Model Test",
      desc: "This was testing importing a 3d model from a outside source.",
      component: <CustomModelTest canvasSize={canvasSize} />,
    },
    {
      id: "01",
      name: "Testing Canvas",
      desc: "This was my first attempt at generating some kind of scene using threejs. You can click the ball to make it jump.",
      component: <TestCanvas canvasSize={canvasSize} />,
    },
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
            <a href="https://threejs.org/">Three.js</a>,
            <Divider hidden fitted />
            Go see the code{" "}
            <a href="https://github.com/teobot/threejs-mug">repo on github</a>.
          </Header.Subheader>
        </Header.Content>
      </Header>
      <Divider inverted />
      {CanvasObjects.map(({ id, name, desc, component }, index) => {
        return (
          <Segment inverted key={index + ""}>
            <Menu inverted secondary>
              <Menu.Menu position="left">
                <Menu.Item header>
                  {name}
                </Menu.Item>
                <Menu.Item>
                  {desc}
                </Menu.Item>
              </Menu.Menu>
              <Menu.Menu position="right">
                <Menu.Item header>
                  <Icon
                    onClick={() => {
                      setSelectedCanvas(id);
                      setModalOpen(true)
                    }}
                    style={{ cursor: "pointer" }} inverted name="expand" />
                </Menu.Item>
              </Menu.Menu>
            </Menu>


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
                    flexDirection: "column",
                  }}
                >
                  <Header inverted as="h2">
                    Click to render the canvas
                  </Header>
                  <Button
                    size="large"
                    primary
                    onClick={() => {
                      setSelectedCanvas(id);
                    }}
                  >
                    Render Canvas
                  </Button>
                </div>
              )}
            </div>
          </Segment>
        );
      })}
      <Modal
        style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "black" }}
        onClose={() => setModalOpen(false)}
        onOpen={() => setModalOpen(true)}
        open={modalOpen}
      >
        {selectedCanvas && modalOpen && CanvasObjects.find(({ id }) => id === selectedCanvas).component}
      </Modal>
      <Divider section />
    </Container>
  );
}

export default App;
