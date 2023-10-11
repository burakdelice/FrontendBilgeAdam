import "./App.scss";
import Character from "./pages/Character";
import Opening from "./components/OpeningPage";
import Search from "./components/CharacterSearch";

function App() {
  return (
    <div className="App">
      <Opening />
      <Search />
      <Character />
    </div>
  );
}

export default App;
