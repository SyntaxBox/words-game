import Nav from "./components/Nav/Nav";
import Container from "./ui/layout/Container";
import H1 from "./ui/typography/H1";

function App() {
  return (
    <section>
      <Nav />
      <Container className="flex flex-col items-center justify-between">
        <H1>
          Welcome To <span className="text-pink-500">Words</span> Game
        </H1>
      </Container>
    </section>
  );
}

export default App;
