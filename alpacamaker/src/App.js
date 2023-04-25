
import './App.css';
import AlpacaPreview from './AlpacaPreview/AlpacaPreview';
import AlpacaGeneratorButtons from './AlpacaGeneratorButtons/AlpacaGeneratorButtons';

function App() {

	const options ={
		neck: ['backwards', 'forwards', 'default', 'thick'],
		mouth: ['astonished', 'default', 'eating', 'laugh', 'tongue'],
		leg: ['bubble tea', 'cookie', 'default', 'game console', 'backwards', 'forwards'],
		hair: ['default', 'curls', 'bangs', 'elegant', 'fancy', 'quiff', 'short'],
		eyes: ['angry', 'default', 'naughty', 'panda', 'smart', 'star'],
		ears: ['default', 'backwards', 'forwards'],
		background: ['blue50'],
		accessory: ['earrings', 'flower', 'glasses', 'headphone'],
	}

  return (
    <div className="App">
      <header className="App-header">
		<h1>Alpaca Generator</h1>
      </header>
	  <div id="generator-container">
		<AlpacaPreview options={options}/>
		<AlpacaGeneratorButtons options={options} />
		<div id="extra-buttons">
			<div className="extra-button" id="randomize-button">🔀 Randomize</div>
			<div className="extra-button" id="download-button">🖼 Download</div>
		</div>
	  </div>
    </div>
  );
}

export default App;
