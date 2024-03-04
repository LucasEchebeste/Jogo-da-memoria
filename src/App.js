import Cards from "./components/Cards";

function App() {

  return (
    <div>
      <button className="button" onClick={() => window.location.reload()}>Novo jogo</button>
      <h1>Jogo da memória React</h1>
      <Cards />
    </div>
  );
}

export default App;
