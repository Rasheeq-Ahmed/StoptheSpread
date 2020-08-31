import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    width: 100%;
    height: 100%;
    display: ${(props) => (props.resource ? 'flex' : 'none')};
    justify-content: center;
    align-items: center;
`


export const Resources = (props) => {

    return (
        <Container resource={props.resource}>
        <div className="resource-all">
            <div className="resource-title">
                Resources
            </div>
            <div className="resource-body">
                
            </div>
        </div>
        </Container>
    )

};