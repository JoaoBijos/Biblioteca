import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import {useHistory} from 'react-router-dom';
import './style.css';

import Arrow from '../../assets/arrow.png';
import Home from '../../assets/Vector.png';
import Books from '../../assets/books.png';
import Logout from '../../assets/logout.png';


export default () => {
    return (
        <NavItem icon={Arrow}>
            <DropdownMenu></DropdownMenu>
        </NavItem>
    );
}

function NavItem(props) {
    const [open, setOpen] = useState(false);

    return (
        <li className="nav-item">
            <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
                <img src={Arrow} />
            </a>

            {open && props.children}
        </li>
    );
}

function DropdownMenu() {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);
    const history = useHistory();

    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, [])

    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    const handleSingIn = () => {
        history.push('/login')
    }

    return (
        <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
            <CSSTransition
                in={activeMenu === 'main'}
                timeout={500}
                unmountOnExit
                onEnter={calcHeight}>
                <div className="menu">
                    <a>
                        <img
                            src={Home}
                            style={{
                                height: 26,
                                paddingRight: 20
                            }} />
                        Home
                    </a>
                    <a>
                        <img 
                            src={Books} 
                            style={{ 
                                height: 26, 
                                paddingRight: 20 
                            }} />
                        Meus Livros
                    </a>
                    <button type='submit' onClick={handleSingIn}>
                        <a>
                            <img 
                                src={Logout} 
                                style={{ 
                                    height: 26, 
                                    paddingRight: 20 
                                }} />
                            Sair
                        </a>
                    </button>
                    
                </div>
            </CSSTransition>
        </div>
    );
}