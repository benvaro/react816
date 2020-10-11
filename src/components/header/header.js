import React from 'react';

import './header.css';

const Header = ({ color, text }) => {
    // console.log(props);
    // const { color, text } = props; // деструктуризація об'єкта
    const style = { color: color };
    return <header className='text-center'>
        <h1 style={style}>{text}</h1>
    </header>
}

export default Header;