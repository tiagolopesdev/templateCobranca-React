import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components';

export const BottonsDefault = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
    gap: 20px;    
`;

const ButtonShapePayment = ({ className, text }) => (
    <button className={className}>{text}</button>
);

export const StyleButtonShapePayment = styled(ButtonShapePayment)`
    border-radius: 30px;
    display: flex;
    justify-content: right;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
    color: rgb(35, 132, 223);

    @media (max-width: 688px) {
        padding: 10px 30px;
        font-size: 18pt;
    }
`;

const ButtonAddTitle = ({ className, text }) => (
    <button className={className}>{text}</button>
);

export const StyleButtonAddTitle = styled(ButtonAddTitle)`
    border-radius: 30px;
    display: block;
    justify-content: left;
    box-shadow: 0px 3px 3px rgb(0 0 0 / 25%);
    color: rgb(35, 132, 223);

    @media (max-width: 688px) {
        padding: 10px 30px;
        font-size: 18pt;
    }
`;

export const Bottons = styled(BottonsDefault)`
    @media (max-width: 688px) {                     
        display: none;                    
    }
`;