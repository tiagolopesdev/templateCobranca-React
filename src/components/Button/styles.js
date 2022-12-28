import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components';

const ButtonTag = ({ className, text }) => (
    <button className={className}>{text}</button>
);

export const StyleButtonTag = styled(ButtonTag)`
    border-radius: 30px;
    display: flex;
    justify-content: right;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
    color: rgb(35, 132, 223);
`;