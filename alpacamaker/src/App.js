
import './App.css';
import AlpacaPreview from './AlpacaPreview/AlpacaPreview';
import AlpacaGeneratorButtons from './AlpacaGeneratorButtons/AlpacaGeneratorButtons';

function App() {
  return (
    <div className="App">
      <header className="App-header">
		<h1>Alpaca Generator</h1>
      </header>
	  <div id="generator-container">
		<AlpacaPreview />
		<AlpacaGeneratorButtons />
		<div id="extra-buttons">
			<div className="extra-button" id="randomize-button">🔀 Randomize</div>
			<div className="extra-button" id="download-button">🖼 Download</div>
		</div>
	  </div>
    </div>
  );
}

export default App;
