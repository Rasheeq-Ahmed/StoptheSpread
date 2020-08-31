import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from './task';

const Container = styled.div`
    border: 1px solid lightgrey;
    width: 200px;
    border-radius: 2px;
    padding: 8px;
    margin-bottom: 8px;
    background: white;

    &:hover {
      background: ${(props) => (!props.add ? "#E5E5E5" : "white")};
    }  
`;

const AddButton = styled.span`
    display: ${(props) => (!props.add ? "flex" : "none")};
    align-items: center;
    cursor: pointer;
    width: 100%;
`;

const EditContainer = styled.span`
    width: 90%;
    display: ${(props) => (props.add ? "flex" : "none")};
    flex-direction: column;
    overflow-y: hidden;
    padding: 8px;
`;

const ButtonContainer = styled.span`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 8px;

    & > button {
        cursor: pointer;
    };
`

export const Input = styled.input`
    width: 100%;
    height: 2em;
    box-sizing: border-box;
    outline: none;
    padding: 0;
    margin: 0;
`

export const AddTask = ({addTask, columnId}) => {

    const [add, setAdd] = useState(false)
    const [content, setContent] = useState('')

    let edit = useRef();
    let input = useRef();

    const reset = () => {
        setAdd(!add)
        setContent('')
        input.current.value = ''
    }

    return (
        <Container add={add}>
            <AddButton 
                add={add}
                onClick={() => setAdd(!add)}>
                <Button><FontAwesomeIcon icon="plus"/></Button>
                 Add Task</AddButton>
            <EditContainer add={add} ref={edit}>
                <Input placeholder='Enter a title' ref={input} onChange={(e) => setContent(e.currentTarget.value)}/>
                <ButtonContainer>
                    <button onClick={content.length ? () => { addTask(columnId, content); reset(); } : () => setAdd(!add)}>Add Task</button>
                    <button onClick={() => reset()}><FontAwesomeIcon icon="times" /></button>   
                </ButtonContainer>
            </EditContainer>
        </Container>
    )


};