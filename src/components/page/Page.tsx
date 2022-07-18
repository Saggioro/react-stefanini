import React, { FunctionComponent } from 'react';
import Header from '../header/Header';

import {Container} from './Page.styled';
interface IPage {
    children: React.ReactNode;
}

const Page:FunctionComponent<IPage> = ({children, ...props}:IPage) => {
    return (
        <Container>
            <Header />
            {children}
        </Container>
    );
};

export default Page;