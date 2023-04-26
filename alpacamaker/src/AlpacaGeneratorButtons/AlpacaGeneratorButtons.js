import React, { useEffect } from "react";
import { useState } from "react";
import styles from './AlpacaGeneratorButtons.css'

function AlpacaGeneratorButtons(props) {

	const updateOptions = props.fnUpdateOptions;
	const [selectedOptions, setSelectedOptions] = useState(props.selectedOptions);
	const [curOptions, setCurOptions] = useState('hair');
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

	const setSelectedChoice = (choice) => {
		//important to use the spread operator here to ensure a new object 
		let newOptions = {...selectedOptions};
		newOptions[curOptions] = choice;
		setSelectedOptions(newOptions);
		updateOptions(newOptions);
	}
	

	return (
    <div>
      <div className="button-container">
        <h3>Accessorize the Alpaca's</h3>
        <div className="buttons">
          <ul>
            {categories.map((e) => (
              <li key={e}
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
              <li key={e}
                className={`customize-button ${
                  selectedOptions[curOptions] === e ? selectedButtonClass : ""
                }`}
				onClick={() => setSelectedChoice(e)}
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