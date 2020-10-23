import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import { MAIN_FONT, FONT_SIZE, LINE_HEIGHT } from './variables'
import { createGlobalStyle } from 'styled-components';

const Reset = createGlobalStyle({
	'*, *:: after, *:: before': {
		boxSizing: 'border-box'
	},
	body: {
		fontFamily: MAIN_FONT,
		fontSize: FONT_SIZE,
		lineHeight: LINE_HEIGHT,
		margin: 0
	}
});

ReactDOM.render(
	<React.StrictMode>
		<Reset />
		<App />
	</React.StrictMode>
	,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
