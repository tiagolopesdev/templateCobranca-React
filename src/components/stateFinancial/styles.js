import 'bootstrap/dist/css/bootstrap.css';
import styled from "styled-components";

export const StateFinancialStyle = styled.div`
    display: flex;
    justify-content: center;
`;

export const TypeFinance = styled.div`
    display: block;
    gap: 20px;
`;

export const NumberFinance = styled.h4`
    color: ${props => props.color};
    margin-top: ${props => props.marginTop};
    font-style: normal;
    font-weight: 700;
    line-height: 18px;
`;

export const TextAndIcon = styled.div`
    display: flex;
    gap: ${props => props.gap};
`;
