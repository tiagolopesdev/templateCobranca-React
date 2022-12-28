import { StyleButtonTag } from './styles.js';

export const Button = ({ className, textDisplay }) => {
    return (
        <StyleButtonTag 
            className={className}
            text={textDisplay}
        />   
    );
}
