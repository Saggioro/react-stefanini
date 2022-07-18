import React, { FunctionComponent } from 'react';
import Page from '../../components/page/Page';
import UserAdd from './components/userAdd/UserAdd';
import UserTable from './components/userTable/UserTable';

import { Container } from './Home.styled';

interface IHome {
    
}

const Home:FunctionComponent<IHome> = ({...props}:IHome) => {
    return (
        <Page>
            <Container >

            <UserAdd />
            <UserTable />
            </Container>
        </Page>
    );
};

export default Home;