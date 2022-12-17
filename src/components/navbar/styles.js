import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components';

const ButtonShapePayment = ({className, text}) => (
    <button className={className}>{text}</button>
);

export const StyleButtonShapePayment = styled(ButtonShapePayment)`
    border-radius: 30px;
    display: flex;
    justify-content: right;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
    color: rgb(35, 132, 223);
`;

const ButtonAddTitle = ({className, text}) => (
    <button className={className}>{text}</button>
);

export const StyleButtonAddTitle = styled(ButtonAddTitle)`
    border-radius: 30px;
    display: block;
    justify-content: left;
    box-shadow: 0px 3px 3px rgb(0 0 0 / 25%);
    color: rgb(35, 132, 223);
`;
