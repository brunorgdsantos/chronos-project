import "./styles/theme.css";
import "./styles/global.css";
import { Container } from "./components/Container";

export function App() {
  return (
    <>
      <Container children={<h1>Este é o componente Container</h1>} />

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
