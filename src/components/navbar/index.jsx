import { GroupButtons} from './styles.js';
import './styles.css';
import { useState } from 'react';
import { Button } from '../Button/index.jsx';

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
                <GroupButtons>
                    <Button 
                        className={'btn btn-light'}
                        textDisplay={'Adicionar título'}
                    />
                    <Button 
                        className={'btn btn-light'}
                        textDisplay={'Forma de pagamento'}
                    />
                </GroupButtons>
            </div> 
            </div>
        </nav>
         
    );
}