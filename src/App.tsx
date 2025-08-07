import { Heading } from "./components/Heading";
import "./styles/theme.css";
import "./styles/global.css";

export function App() {
  return (
    <>
      <Heading>Ola Mundo de TESTES</Heading>
      <Heading>Ola Mundo de TESTES 2</Heading>
      <Heading>Ola Mundo de TESTES 3</Heading>
      <h1>Hello, World (DO APP!)</h1>
    </>
  );
}

//Essa String (Linha 8) sera passada para props em Heading.tsx
//export default App;
//export { App };
