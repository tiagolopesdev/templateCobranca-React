import { 
    Bottons, 
    StyleButtonAddTitle, 
    StyleButtonShapePayment 
} from './styles';

export const Navbar = () => {
    return(
        <nav class="navbar navbar-dark bg-primary">
            <div class="container-fluid">
            <span class="navbar-brand mb-0 h1">Financias</span>
            <div class="menuSection">
                <div class="menuToggle">
                    <div class="one"></div>
                    <div class="two"></div>
                    <div class="three"></div>
                </div> 
                <Bottons>
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