import React from "react";
import styles from './AlpacaGeneratorButtons.css'

function AlpacaGeneratorButtons() {
	return (
		<div>
			<div className="button-container">
				<h3>Accessorize the Alpaca's</h3>
				<div className="buttons">
					<ul>
						<li className="customize-button">Hair</li>
						<li className="customize-button">Ears</li>
						<li className="customize-button">Eyes</li>
						<li className="customize-button">Mouth</li>
						<li className="customize-button">Neck</li>
						<li className="customize-button">Leg</li>
						<li className="customize-button">Accessories</li>
						<li className="customize-button">Background</li>
					</ul>
				</div>
			</div>
			<div className="button-container">
				<h3>Style</h3>
				<div className="buttons">
					<ul>
						<li className="customize-button">Default</li>
						<li className="customize-button">Curls</li>
						<li className="customize-button">Short</li>
						<li className="customize-button">Bang</li>
						<li className="customize-button">Elegant</li>
						<li className="customize-button">Quiff</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default AlpacaGeneratorButtons;