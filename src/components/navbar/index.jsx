import { 
    Bottons, 
    StyleButtonAddTitle, 
    StyleButtonShapePayment 
} from './styles.js';

import './styles.css';
import { useState } from 'react';

export const Navbar = () => {

    let [showMenu, setShowMenu] = useState(true);

    const openMenu = () => {
        var menuSection = document.querySelector(".menuSection");
        var menuToggle = menuSection.querySelector(".menuToggle");

        menuToggle.addEventListener("click", () => { 
            document.body.style.overflow = showMenu ? "hidden" : "initial";
            menuSection.classList.toggle("on", showMenu);
            setShowMenu(!showMenu);
        })
    }
    
    return(
        <nav className="navbar navbar-dark bg-primary">
            <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">Financias</span>            
            <div className="menuSection">        
                <div className="menuToggle" onClick={openMenu}>
                    <div className="one"></div>
                    <div className="two"></div>
                    <div className="three"></div>
                </div> 
                <Bottons className='bottons'>
                    <StyleButtonAddTitle
                        className={'btn btn-light'}
                        text={'Adicionar títulos'}
                    />                    
                    <StyleButtonShapePayment 
                        className={'btn btn-light'}
                        text={'Formas de pagamento'}
                    />
                </Bottons>                      
            </div> 
            </div>
        </nav>
         
    );
}