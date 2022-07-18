import styled from "styled-components";
import Colors from "../../enums/Colors";


export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    background: ${Colors.background};
    height: 100vh;
    width: 100%;
`; 

export const LoginArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    background: ${Colors.secondaryBackground};
    border-radius: 20px;
    height: 300px;
    width: 500px;
`; 