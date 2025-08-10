import "./styles/theme.css";
import "./styles/global.css";
import { Container } from "./components/Container";
import { Heading } from "./components/Heading";

export function App() {
  return (
    <>
      <Container>
        <Heading>LOGO</Heading>
      </Container>

      <Container>
        <Heading>MENU</Heading>
      </Container>

      <div className="container">
        <div className="content">
          <section>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
            ipsum. Alias, dignissimos ab aperiam ipsum ratione quas dolores et
            accusamus tempore accusantium eos possimus libero cum quibusdam
            consequatur iusto minus.
          </section>
        </div>
      </div>
    </>
  );
}
