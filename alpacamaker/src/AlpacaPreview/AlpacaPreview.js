import React from "react";
import blue50 from '../img/backgrounds/blue50.png';
import neckDefault from '../img/neck/default.png';
import neckThick from '../img/neck/thick.png';
import neckBackward from '../img/neck/bend-backward.png'
import neckForward from '../img/neck/bend-forward.png'
import nose from '../img/nose.png';
import mouthDefault from '../img/mouth/default.png';
import mouthAstonished from '../img/mouth/astonished.png';
import mouthEating from '../img/mouth/eating.png';
import mouthLaugh from '../img/mouth/laugh.png';
import mouthTongue from '../img/mouth/tongue.png';
import eyeDefault from '../img/eyes/default.png';
import eyeAngry from '../img/eyes/angry.png';
import eyeNaughty from '../img/eyes/naughty.png';
import eyePanda from '../img/eyes/panda.png';
import eyeSmart from '../img/eyes/smart.png';
import eyeStar from '../img/eyes/star.png';
import earDefault from '../img/ears/default.png';
import earBackwards from '../img/ears/tilt-backward.png';
import earForwards from '../img/ears/tilt-forward.png';
import accessoryDefault from '../img/accessories/headphone.png';
import accessoryEarrings from '../img/accessories/earings.png';
import accessoryFlower from '../img/accessories/flower.png';
import accessoryGlasses from '../img/accessories/glasses.png';
import hairDefault from '../img/hair/default.png';
import hairCurls from '../img/hair/curls.png';
import hairBangs from '../img/hair/bang.png';
import hairElegant from '../img/hair/elegant.png';
import hairFancy from '../img/hair/fancy.png';
import hairQuiff from '../img/hair/quiff.png';
import hairShort from '../img/hair/short.png';
import legDefault from '../img/leg/default.png';
import legBubbleTea from '../img/leg/bubble-tea.png';
import legCookie from '../img/leg/cookie.png';
import legGameConsole from '../img/leg/game-console.png';
import legForward from '../img/leg/tilt-forward.png';
import legBackward from '../img/leg/tilt-backward.png';
import styles from './AlpacaPreview.css'

function AlpacaPreview(props) {

	const selectedOptions = props.selectedOptions;
	const options = props.options;

	const getImageFromOption = (part, option) => {
		if (part === 'neck') {
			switch(option) {
				case 'backwards':
					return neckBackward;
				case 'forwards':
					return neckForward;
				case 'thick':
					return neckThick;
				default:
					return neckDefault;
			}
		} else if (part === 'mouth') {
			switch(option) {
				case 'astonished':
					return mouthAstonished;
				case 'eating':
					return mouthEating;
				case 'laugh':
					return mouthLaugh;
				case 'tongue':
					return mouthTongue;
				default:
					return mouthDefault;
			}
		} else if (part === 'ears') {
			switch(option) {
				case 'backwards':
					return earBackwards;
				case 'forwards':
					return earForwards;
				default: 
					return earDefault;
			}
		} else if (part === 'hair') {
			switch(option) {
				case 'curls':
					return hairCurls;
				case 'bangs':
					return hairBangs;
				case 'elegant':
					return hairElegant;
				case 'fancy':
					return hairFancy;
				case 'quiff':
					return hairQuiff;
				case 'short':
					return hairShort;
				default: 
					return hairDefault;
			}
		} else if (part === 'eyes') {
			switch(option) {
				case 'angry':
					return eyeAngry;
				case 'naughty':
					return eyeNaughty;
				case 'panda':
					return eyePanda;
				case 'smart':
					return eyeSmart;
				case 'star':
					return eyeStar;
				default: 
					return eyeDefault;
			}
		} else if (part === 'leg') {
			switch(option) {
				case 'bubble tea':
					return legBubbleTea;
				case 'cookie':
					return legCookie;
				case 'game console':
					return legGameConsole;
				case 'backwards':
					return legBackward;
				case 'forwards':
					return legForward;
				default: 
					return legDefault;
			}
		} else if (part === 'accessory') {
			switch(option) {
				case 'earrings':
					return accessoryEarrings;
				case 'flower':
					return accessoryFlower;
				case 'glasses':
					return accessoryGlasses;
				default: 
					return accessoryDefault;
			}
		}
		return null;
	}

	return (
		<div id="preview-container">
			<img id="background-image" src={blue50} alt="background"/>
			<img id="neck-image" src={getImageFromOption('neck', selectedOptions.neck)} alt="neck" />
			<img id="nose-image" src={nose} alt="nose"/>
			<img id="mouth-image" src={getImageFromOption('mouth', selectedOptions.mouth)} alt="mouth"/>
			<img id="ear-image" src={getImageFromOption('ears', selectedOptions.ears)} alt="ear"/>
			<img id="hair-image" src={getImageFromOption('hair', selectedOptions.hair)} alt="hair"/>
			<img id="eye-image" src={getImageFromOption('eyes', selectedOptions.eyes)} alt="eye"/>
			<img id="leg-image" src={getImageFromOption('leg', selectedOptions.leg)} alt="leg"/>
			<img id="accessory-image" src={getImageFromOption('accessory', selectedOptions.accessory)} alt="accessory"/>
		</div>
	);
}

export default AlpacaPreview;