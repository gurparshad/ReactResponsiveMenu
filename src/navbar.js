import React,{Component} from 'react';
import logo from './img/logo.png';
import './navbar.css';
import {Link} from 'react-router-dom';

class Navbar extends Component{

    state ={
        isOpen:false
    }
    handleClick = () =>{
        this.setState({
            isOpen:!this.state.isOpen
        })
    }

    closeNavbar = () => {
        this.setState({
            isOpen: false
        })
    }

    render(){
        return(
            <nav>
      <div className="logoArea">
          <div className="logo">
          <Link to='/'> <img src={logo} alt=""/> </Link>
          </div>
        

        <div className="btn" onClick={this.handleClick}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      <ul className={this.state.isOpen ? 'showNav': 'undefined'}>
        <li><Link to='/' onClick={this.closeNavbar}>Home</Link></li>
        <li><Link to='/about' onClick={this.closeNavbar} >About</Link></li>
        <li><Link to='/contact' onClick={this.closeNavbar}>contact</Link></li>
        <li><Link to='/lost' onClick={this.closeNavbar}>lost</Link></li>
      </ul>
    </nav>
        )
    }
}

export default Navbar;