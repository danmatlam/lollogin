import React, { useState } from 'react';
import styled from 'styled-components'
import LoginForm from './LoginForm'

const LoginLayout = () => {
    return (
        <View>
            <MainSide>
                <Block>
                    <Logo src="/assets/logo.svg" style={{margin:'3em'}} />
                    <h1>Sign in</h1>
                    <LoginForm />
                </Block>

                <Block >
                    <a>Can't sign in? </a>
                    <a>Create account</a>
                </Block>


            </MainSide>
            <Aside>
                <Background src="/assets/background.jpg" />
            </Aside>
        </View>
    )
}

export default LoginLayout;

// FULL CONTAINER
const View = styled.div`
    height:100vh;
    width: 100vw;
    background-color:#000;
    display:flex;
    flex-direction:row;

`;


// MAIN SIDE

const MainSide = styled.div`
    flex:4;
    height:100vh;
    background-color:white;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    
  
`;


const Logo = styled.img`
  height:3em;
    width:3em;
`
const Block = styled.div`
    padding:3em 0;
    display:flex;
    flex-direction:column;
    align-items:center;
    h1 {
        font-size:1.5em;
    }
    a{
        color:#cacaca;
        text-transform:uppercase;
        font-size:.69em;
        margin:.3em;
    }

`






// IMAGE SIDE
const Aside = styled.div`
    flex:8;
    height:100vh;
    overflow:hidden;
`;

const Background = styled.img`
   /* max-width:200%; */
   height:100%;
   width:100%;
   object-fit:cover;
   text-indent: -50%;
`


