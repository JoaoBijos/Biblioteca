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

    const handleSingIn = () => {
        history.push('/login')
    }

    const navegateTo = () => {
        history.push('/meuslivros')
    }

    const goToHome = () => {
        history.push('/home')
    }

    return (
        <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
            <CSSTransition in={activeMenu === 'main'}>
                <div className="menu">
                    <a onClick={goToHome}>
                        <img src={Home} style={{ height: 26, paddingRight: 20 }} />
                        Home
                    </a>
                    <a onClick={navegateTo}>
                        <img src={Books} style={{ height: 26, paddingRight: 20 }} />
                        Meus Livros
                    </a>
                    <a onClick={handleSingIn}>
                        <img src={Logout} style={{ height: 26, paddingRight: 20 }} />
                        Sair
                    </a>
                </div>
            </CSSTransition>
        </div>
    );
}