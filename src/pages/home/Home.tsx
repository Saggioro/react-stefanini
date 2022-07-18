import React, { FunctionComponent } from 'react';
import Header from '../../components/header/Header';

import { Container } from './Home.styled';

interface IHome {
    
}

const Home:FunctionComponent<IHome> = ({...props}:IHome) => {
    return (
        <Container>
            todo
        </Container>
    );
};

export default Home;