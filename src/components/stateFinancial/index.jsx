import { CardBodyStyled, CardStyled } from "../../styles/styles-global";
import { StateFinancialStyle, TypeFinance, NumberFinance, TextAndIcon } from "./styles";
import './style.css';
import LogoRecipes from './recipes.png';
import LogoExpensive from './expensives.png';

export const StateFinancial = () => {

    return (
        <StateFinancialStyle>
            <CardStyled>
                <CardBodyStyled>
                    <TypeFinance>
                        <TextAndIcon
                            gap='50px'
                        >
                            <p className="card-text-recipes">Receitas</p>
                            <div>                            
                                <img src={LogoRecipes} alt='Icon recipes'/>
                            </div>
                        </TextAndIcon>
                        <NumberFinance 
                            color='#36AF51'
                            marginTop='10px'
                        >
                            0000000000
                        </NumberFinance>
                    </TypeFinance>
                    <div className="divisionReceitaDespesa"></div>
                    <TypeFinance>
                        <TextAndIcon
                            gap='30px'
                        >
                            <div>
                                <img src={LogoExpensive} alt='Icon expenses'/>
                            </div>
                            <p className="card-text-expensive">Despesas</p>
                        </TextAndIcon>
                        <NumberFinance
                            color="#E44343"
                            marginTop="10px"
                        >
                            0000000000
                        </NumberFinance>                      
                    </TypeFinance>
                </CardBodyStyled>
            </CardStyled>
        </StateFinancialStyle>        
    );
}
