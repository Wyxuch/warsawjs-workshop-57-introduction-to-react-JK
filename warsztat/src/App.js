import './App.scss';
import Navigation from "./components/Navigation";
import Game from "./components/Game";

function App() {
  return (
    <div className="App">
        <Navigation />
        <div className={'gameWrapper'}>
            <Game />
        </div>
    </div>
  );
}

export default App;
