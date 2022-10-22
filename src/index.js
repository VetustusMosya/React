import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './components/app/App';

// ! npm start
// const elem = ;

// function Second(props) {
// 	return (
// 		<div>
// 			<h1>Hi, {props.name}</h1>
// 			{props.second}
// 			{props.third}
// 		</div>
// 	)
// }

class Testic extends React.Component {
	constructor(props) {
		super(props);
		this.state = { count: 0 };

		this.zjmjack = () => {
			this.setState(state => ({
				count: ++state.count
			}))
		}
		// this.zjmjack = this.zjmjack.bind(this);
	}

	zjmjack = () => {
		this.setState(state => ({
			count: ++state.count
		}))
	}

	// zjmjack() {
	// 	this.setState(state => ({
	// 		count: ++state.count
	// 	}))
	// }

	render() {
		return (
			<>
				<h1>Hi, {this.state.name}</h1>
				{this.props.second}
				<button onClick={this.zjmjack}>{this.state.count}</button>
				<ChangeShit />
			</>);
	}
}

function ChangeShit() {
	let [text, changeText] = useState("pizdec");

	function change() {
		changeText(text = "govno")
	}
	return (<h1 onClick={change}>{text}</h1>)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Testic second={<h2>Fuck u</h2>} />);


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);


