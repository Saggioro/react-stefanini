import React, { FunctionComponent } from 'react';

import { Container } from './Button.styled';

interface IButton extends React.HTMLAttributes<HTMLButtonElement>{
    color?: string;
}

const Button:FunctionComponent<IButton> = ({color, children, ...props}:IButton) => {
    return (
        <Container color={color}>
            {children}
        </Container>
    );
};

export default Button;