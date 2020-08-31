import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    width: 100%;
    height: 100%;
    display: ${(props) => (props.info ? 'flex' : 'none')};
    justify-content: center;
    align-items: center;
`


export const Info = (props) => {

    return (
        <Container info={props.info}>
            <div>
                Welcome to our site!
            </div>
        </Container>
    )

};