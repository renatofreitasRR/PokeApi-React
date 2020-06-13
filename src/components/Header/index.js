import React, { Component } from 'react';
import './styles.css'
import pokeball from '../../assets/pokeball.svg'
import logo from '../../assets/logo.svg'
class Header extends Component {
    render() {
        return (
            <header>
                <img src={pokeball} alt="pokeball" id="pokeball" />
                <img src={logo} alt="pikachu" />
            </header>
        )
    }
}
export default Header;