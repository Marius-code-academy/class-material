import "./App.css";
import Container from "./components/Container/Container";
import CountProvider from "./components/Context/CountContext";

function App() {
  return (
    <>
      <CountProvider>
        <Container />
        <Container />
      </CountProvider>
    </>
  );
}

export default App;
