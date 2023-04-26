
import './App.css';
import AlpacaPreview from './AlpacaPreview/AlpacaPreview';
import AlpacaGeneratorButtons from './AlpacaGeneratorButtons/AlpacaGeneratorButtons';
import { useState } from "react";
import html2canvas from "html2canvas";

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

	const [selectedOptions, setSelectedOptions] = useState({
		neck: 'default',
		mouth: 'default',
		leg: 'default',
		hair: 'default',
		eyes: 'default',
		ears: 'default',
		background: 'blue50',
		accessory: 'default'
	});

	const updateOptions = (options) => {
		setSelectedOptions(options);
	}

	const getRandomIndex = (arr) => {
		const randInt = Math.floor(Math.random() * arr.length);
		return randInt
	}
	const getRandomArrayValue = (arr) => {
		return arr[getRandomIndex(arr)];
	}

	const randomizeOptions = () => {
		let newOptions = {...options};
		newOptions.neck = getRandomArrayValue(options.neck);
		newOptions.mouth = getRandomArrayValue(options.mouth);
		newOptions.leg = getRandomArrayValue(options.leg);
		newOptions.hair = getRandomArrayValue(options.hair);
		newOptions.eyes = getRandomArrayValue(options.eyes);
		newOptions.ears = getRandomArrayValue(options.ears);
		newOptions.background = getRandomArrayValue(options.background);
		newOptions.accessory = getRandomArrayValue(options.accessory);
		updateOptions(newOptions);
	}

	const downloadImage = () => {
		html2canvas(document.getElementById('preview-container')).then(canvas => {
			let a = document.createElement("a");
			a.download = "llama.png";
			a.href = canvas.toDataURL("image/png");
			a.click(); 
		})
	}

  return (
    <div className="App">
      <header className="App-header">
		<h1>Alpaca Generator</h1>
      </header>
	  <div id="generator-container">
		<AlpacaPreview options={options} selectedOptions={selectedOptions}/>
		<AlpacaGeneratorButtons options={options} selectedOptions={selectedOptions} fnUpdateOptions={updateOptions.bind(this)} />
		<div id="extra-buttons">
			<div className="extra-button" id="randomize-button" onClick={() => randomizeOptions()}>🔀 Randomize</div>
			<div className="extra-button" id="download-button" onClick={() => downloadImage()}>🖼 Download</div>
		</div>
	  </div>
    </div>
  );
}

export default App;
