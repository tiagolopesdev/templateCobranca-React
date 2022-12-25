import { Card, CardBody, CardBodyStyled, CardStyled } from "../../styles/styles-global";
import { Expenses, NumberRecipes, Recipes, StateFinancialStyle } from "./styles";
import './style.css';
import LogoRecipes from './recipes.png';
import LogoExpensive from './expensives.png';

export const StateFinancial = () => {

    return (
        <StateFinancialStyle>
            <CardStyled>
                <CardBodyStyled>
                    <Recipes>
                        <div className="textAndIndicativoReceitas">
                            <p className="card-text">Receitas</p>
                        </div>
                        <NumberRecipes>0000000000</NumberRecipes>                        
                        <div className="indicativoReceita">                            
                            <img src={LogoRecipes} />
                        </div>
                    </Recipes>
                    <div className="divisionReceitaDespesa"></div>
                    <Expenses>
                        <div className="indicativoDespesa">
                            <img src={LogoExpensive} />
                        </div>
                        <div>
                            <p className="card-text" id="titleDespesa">Despesas</p>
                            <h4 className="card-title">0000000000</h4>
                        </div>
                    </Expenses>
                </CardBodyStyled>
            </CardStyled>
        </StateFinancialStyle>        
    );
}
