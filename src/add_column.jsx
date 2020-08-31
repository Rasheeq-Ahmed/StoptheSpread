import React, {useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from './task';

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  width: 220px;
  background-color: #fdffb6;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const AddButton = styled.span`
    display: ${(props) => (!props.add ? "flex" : "none")};
    align-items: center;
    cursor: pointer;
    padding: 8px;
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
    cursor: pointer;
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



export const AddColumn = (props) => {

    const [add, setAdd] = useState(false)
    const [title, setTitle] = useState('')
    let edit = useRef()
    let input = useRef()

    const reset = () => {
        setAdd(!add)
        setTitle('')
        input.current.value = ''
    };

    const useOnClickOutside = (ref, handler) => {
        useEffect(
            () => {
                const listener = event => {
                    if (!ref.current || ref.current.contains(event.target)) {
                        return;
                    }

                    handler(event);
                };

                document.addEventListener('mousedown', listener);
                document.addEventListener('touchstart', listener);

                return () => {
                    document.removeEventListener('mousedown', listener);
                    document.removeEventListener('touchstart', listener);
                };
            },
            [ref, handler]
        );
    // Special thanks to Easy to understand React Hook recipes by Gabe Ragland!!
    };

    const show = (
    <Container onClick={useOnClickOutside(edit, () => setAdd(false))} colOrder={props.colOrder}>
        <AddButton onClick={() => setAdd(!add)} add={add}>
            <Button><FontAwesomeIcon icon="plus" /></Button>
                Add Column
        </AddButton>
        <EditContainer add={add} ref={edit}>
            <Input placeholder='Enter a title' ref={input} onChange={(e) => setTitle(e.currentTarget.value)}></Input>

            <ButtonContainer>
                <button onClick={title.length ? () => { props.addCol(title); reset(); } : () => setAdd(!add)}>Add Column</button>
                <button onClick={() => reset()}><FontAwesomeIcon icon="times" /></button>
            </ButtonContainer>
        </EditContainer>
    </Container>
    );

    const toMany = (
        <Container > 
            <AddButton>
                <Button><FontAwesomeIcon icon="" /> </Button>Max Columns Reached <br/>
            </AddButton>
        </Container>
    );



    return (
        props.colOrder.length < 6 ? show : toMany
    );

}