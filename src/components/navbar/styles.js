import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components';

export const GroupButtons = styled.div`
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
    gap: 20px;
    
    @media (max-width: 688px) {                     
        display: none;                    
    }
`;