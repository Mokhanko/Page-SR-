import React, {Component} from 'react'
import Menu from './components/menu'
import Logo from './components/logo'
import Proposition from './components/proposition'
import './styles.css'

class Header extends Component {
    render() {
        return(
            <div className="header">
                <Menu />
                <Logo />
                <Proposition />
            </div>
            
        );
    }

}

export default Header