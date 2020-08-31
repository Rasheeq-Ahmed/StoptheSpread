import React, { useState } from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Container = styled.div`
    position: fixed;
    display: ${(props) => (props.current === props.taskId && props.show ? 'flex' : 'none')};
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.25);
`;

const TaskInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 50%;
    background: white;
    padding: 8px;
`;

const Header = styled.span`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 10%;
    font-size: medium;
    font-weight: bold;
    border: 1px solid black;
`;

const Body = styled.div`
    display: flex;
    width: 100%
    height: 90%
    border: 1px solid black;
`




export const TaskModal = (props) => {
    let { task, toggle, current, show } = props
    return (
        <Container taskId={task.id} current={current} show={show}>
            <TaskInfo>
                <Header>
                    <p>{task.content}</p>
                    <button onClick={() => toggle()}><FontAwesomeIcon icon="times" /></button>
                </Header>
                <Body>
                    <p>Details: {task.details}</p>
                </Body>
            </TaskInfo>
        </Container>
    )
};