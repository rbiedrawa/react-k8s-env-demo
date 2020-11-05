import logo from './logo.svg';
import './App.css';
import EnvComponent from "./components/EnvCompoments";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <EnvComponent/>
      </header>
    </div>
  );
}

export default App;
