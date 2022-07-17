import React, { FunctionComponent } from 'react';

import { Container } from './Button.styled';

interface IButton extends React.HTMLAttributes<HTMLButtonElement>{
    color?: string;
    type?: 'submit' | 'button';
}

const Button:FunctionComponent<IButton> = ({color, type = 'submit', children, ...props}:IButton) => {
    return (
        <Container color={color} type={type}>
            {children}
        </Container>
    );
};

export default Button;