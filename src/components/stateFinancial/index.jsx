import { Card, CardBody, CardBodyStyled, CardStyled } from "../../styles/styles-global";
import { Expenses, NumberRecipes, NumberExpenses, Recipes, StateFinancialStyle } from "./styles";
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
                            <div className="indicativoReceita">                            
                                <img src={LogoRecipes} />
                            </div>
                        </div>
                        <NumberRecipes>0000000000</NumberRecipes>                        
                    </Recipes>
                    <div className="divisionReceitaDespesa"></div>
                    <Expenses>
                        <div className="textAndIndicativoDespesas">
                            <div className="indicativoDespesa">
                                <img src={LogoExpensive} />
                            </div>
                            <p className="card-text" id="titleDespesa">Despesas</p>
                        </div>
                        <NumberExpenses>0000000000</NumberExpenses>                        
                    </Expenses>
                </CardBodyStyled>
            </CardStyled>
        </StateFinancialStyle>        
    );
}
