import React from "react";
import blue50 from '../img/backgrounds/blue50.png'
function AlpacaPreview() {

	return (
		<div id="preview-container">
			<img id="background-image" src={blue50} alt="background"/>
			<img id="neck-image" alt="neck" />
			<img id="nose-image" alt="nose"/>
			<img id="mouth-image" alt="mouth"/>
			<img id="eye-image" alt="eye"/>
			<img id="ear-image" alt="ear"/>
			<img id="accessory-image" alt="accessory"/>
			<img id="hair-image" alt="hair"/>
			<img id="leg-image" alt="leg"/>
		</div>
	);
}

export default AlpacaPreview;