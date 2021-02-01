import React from 'react';
import './Colors.css';

const Colors = () => {
    const [color, setColor] = React.useState('red');

    const blue = () => {
        setColor('blue');
    };

    const red = () => {
        setColor('red');
    };

    const yellow = () => {
        setColor('yellow');
    };

    const green = () => {
        setColor('green');
    };

    return (
    <div className='square-bloc'>
	    <li className='square-container'>
	      <div className='square blue' onClick={blue}></div>
	      <div className='square red' onClick={red}></div>
	      <div className='square yellow' onClick={yellow}></div>
	      <div className='square green' onClick={green}></div>
	    </li>
	    <p>Last clicked color is {color}</p>
    </div>
    );
};

export default Colors;