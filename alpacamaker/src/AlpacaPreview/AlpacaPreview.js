import React from "react";
import blue50 from '../img/backgrounds/blue50.png';
import neckDefault from '../img/neck/default.png';
import nose from '../img/nose.png';
import mouthDefault from '../img/mouth/default.png';
import eyeDefault from '../img/eyes/default.png';
import earDefault from '../img/ears/default.png';
import accessoryDefault from '../img/accessories/headphone.png';
import hairDefault from '../img/hair/default.png';
import legDefault from '../img/leg/default.png';
import styles from './AlpacaPreview.css'
function AlpacaPreview() {

	return (
		<div id="preview-container">
			<img id="background-image" src={blue50} alt="background"/>
			<img id="neck-image" src={neckDefault} alt="neck" />
			<img id="nose-image" src={nose} alt="nose"/>
			<img id="mouth-image" src={mouthDefault} alt="mouth"/>
			<img id="ear-image" src={earDefault} alt="ear"/>
			<img id="hair-image" src={hairDefault} alt="hair"/>
			<img id="eye-image" src={eyeDefault} alt="eye"/>
			<img id="leg-image" src={legDefault} alt="leg"/>
			<img id="accessory-image" src={accessoryDefault} alt="accessory"/>
		</div>
	);
}

export default AlpacaPreview;