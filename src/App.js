import "./App.css";
import Title from "./StyledComponents/H1";
import Navbar from "./StyledComponents/Navbar";
import Button from "./StyledComponents/Button";
import Section from "./StyledComponents/Section";
import randomNumber from "./funcionalities/randomNumber";
import { useState } from "react";
import Character from "./components/Character";
import Mensaje from "./StyledComponents/Mensaje";

function App() {
  const [id, setId] = useState(null);
  if (id) {
    return (
      <>
        <Navbar>
          <Title>Rick Y Morty</Title>
        </Navbar>
        <Section style={{ marginBottom: "2rem" }}>
          <Button onClick={() => setId(randomNumber(826))} style={{}}>
            Generate Character
          </Button>
        </Section>
        <Character id={id} />
      </>
    );
  } else {
    return (
      <>
        <Navbar>
          <Title>Rick Y Morty</Title>
        </Navbar>
        <Section style={{ marginBottom: "2rem" }}>
          <Mensaje>Da Click Para Generar un Personaje</Mensaje>
          <Button onClick={() => setId(randomNumber(826))} style={{}}>
            Generate Character
          </Button>
        </Section>
      </>
    );
  }
}

export default App;
