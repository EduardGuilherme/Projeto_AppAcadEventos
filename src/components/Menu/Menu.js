import React from 'react';
import Logo from '../../assets/img/Logo.png';
import Button from '../Button/index';
import './index.css';

function Menu(){
    return(
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="EduFlix"/>
            </a>
            <Button className="ButtonLink" href="/">
                Novo vídeo
            </Button>
        </nav>

    );
};
export default Menu;