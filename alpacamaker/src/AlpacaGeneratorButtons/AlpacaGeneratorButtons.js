import React from "react";
import { useState } from "react";
import styles from './AlpacaGeneratorButtons.css'

function AlpacaGeneratorButtons(props) {

	

	const [curOptions, setCurOptions] = useState('hair');
	const [selectedOptions, setSelectedOptions] = useState({
		neck: 'default',
		mouth: 'default',
		leg: 'default',
		hair: 'default',
		eyes: 'default',
		ears: 'default',
		background: 'blue50',
		accessory: 'default'
	})

	const categories = ['Hair', 'Ears', 'Eyes', 'Mouth', 'Neck', 'Leg', 'Accessories', 'Background'];
	const selectedButtonClass = 'selected-button';

	const categoryNameToOptions = (name) => {
		switch(name) {
			case 'Accessories':
				return 'accessory';
			default: 
				return name.toLowerCase();
		}
	}
	

	return (
    <div>
      <div className="button-container">
        <h3>Accessorize the Alpaca's</h3>
        <div className="buttons">
          <ul>
            {categories.map((e) => (
              <li
                className={`customize-button ${
                  curOptions === categoryNameToOptions(e)
                    ? selectedButtonClass
                    : ""
                }`}
				onClick={() => setCurOptions(categoryNameToOptions(e))}
              >
                {e}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="button-container">
        <h3>Style</h3>
        <div className="buttons">
          <ul>
            {props.options[curOptions].map((e) => (
              <li
                className={`customize-button ${
                  selectedOptions[curOptions] === e ? selectedButtonClass : ""
                }`}
              >
                {e}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AlpacaGeneratorButtons;