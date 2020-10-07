import React, { useState } from 'react';
import styled from 'styled-components'
import LoginForm from './LoginForm'
import Carousel from 'react-material-ui-carousel'



const LoginLayout = () => {
    const items =['background-1.jpg','background-2.jpg','background-3.jpg','background-4.jpg','background-5.jpg', ]
    return (
        <View>
            <MainSide>
                <Block>
                    <Logo src="/assets/logo.svg" />
                    <h1>Sign in</h1>
                    <LoginForm />
                </Block>
                <Block >
                    <a>Can't sign in? </a>
                    <a>Create account</a>
                </Block>
            </MainSide>
            <Aside>
                <Carousel  indicators={false} animation="slide" navButtonsAlwaysVisible>
                    {
                        items.map((item, i) => <Background src={`/assets/${item}`} />
                        )
                    }
                </Carousel>
            </Aside>

        </View>
    )
}

export default LoginLayout;

// FULL CONTAINER
const View = styled.div`
    height:100%;
    width: 100vw;
    display:flex;
        background-color:#000000;

    @media screen and (max-width: 800px) {
        flex-direction:column-reverse;
        align-items:center;
    }
`;


// MAIN SIDE

const MainSide = styled.div`
    flex:4;
    background-color:white;
    overflow:hidden;
    display:flex;
    flex-direction:column;
    display:flex;
    justify-content:space-between;
    padding-top:9em;

    @media screen and (max-width: 800px) {
        padding:0;
        z-index:1;
        width:80vw;
        border-radius:1.2em;
        margin-top:-6em;
        margin-bottom:6em;

    }
    @media screen and (max-width: 400px) {
        padding:0;
        width:100vw;
        margin-bottom:0;
        margin-bottom:6em;

    }
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
    overflow:hidden;
    display:flex;
`;

const Background = styled.img`
    height:100vh;
    width:100%;
    object-fit:cover;
    @media screen and (max-width: 800px) {
       height:30vh;
    }

`


