import { Navbar } from '../../components/navbar';
import { StateFinancial } from '../../components/stateFinancial';
import './App.css';

export const Home = () => {
  return (
    <div className="App">
      <Navbar></Navbar>  
      <StateFinancial></StateFinancial>    
    </div>
  );
}
