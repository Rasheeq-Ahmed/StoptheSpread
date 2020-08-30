import React from 'react'
import styled from 'styled-components'
import {Draggable} from 'react-beautiful-dnd'

const Container = styled.div`
    border: 1px solid lightgrey;
    border-radius: 2px;
    padding: 8px;
    margin-bottom: 8px;
    background-color: ${props => (props.isDragDisabled ? 'lightgrey': props.isDragging ? 'lightgreen' : 'white')};
    display: flex;
    flex-direction: column;
`;

export const EditContainer = styled.div`
   max-height: ${(props) => (props.editShow ? "10em" : "0")};
   opacity: ${(props) => (props.editShow ? 1 : 0)};
   overflow-y: hidden;
   transition: 0.5s ease;
   display: flex;
   justify-content: center;
   align-items: baseline;
   width: max-content;
`;

export const Button = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid grey;
    border-radius: 2px;
    width: 1.5em;
    height: 1.5em;
    cursor: pointer;
`

export const Input = styled.input`
    width: 10em;
    height: 2em;
    box-sizing: border-box;
    outline: none;
    padding: 0;
    margin: 0;
`


export const TitleContainer = styled.div`
   display: flex;
   justify-content: space-between;
   margin-bottom: 8px;
`;


// const Handle = styled.div`
//     width: 20px;
//     height: 20px;
//     background-color: orange;
//     border-radius: 4px;
//     margin-right: 8px;

// `




export default class Task extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            content: '',
            editShow: false
        }

    }

    update = (e) => {
        this.setState({content: e.currentTarget.value});
    }

    toggle = () => {
        this.setState({editShow: !this.state.editShow})
    } 

    render() {
        let { editTask, removeTask, task, columnId } = this.props
        const isDragDisabled = this.props.task.id === 'task-1'
        return (
            <Draggable 
            draggableId={this.props.task.id}
            index={this.props.index}
            isDragDisabled={this.props.task.id === 'task-1'}
             
             >
                {(provided, snapshot) => (

                <Container
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
                isDragging={snapshot.isDragging}
                isDragDisabled={isDragDisabled}
                >
                    {/* <Handle {...provided.dragHandleProps}/> */}
                    <TitleContainer>
                        {this.props.task.content}
                        <Button onClick={() => this.toggle()}>
                            {this.state.editShow ? 'X' : 'O' }
                        </Button>
                    </TitleContainer>
                    <EditContainer editShow={this.state.editShow}>
                        <Input type="text" value={this.state.content} onChange={(e) => this.update(e)}/>
                        <Button onClick={() => {editTask(task.id, this.state.content); this.toggle()}}>U</Button>
                        <Button onClick={() => removeTask(columnId, task.id)}>-</Button>
                    </EditContainer>
                </Container>
                    
                )}
            </Draggable>
            
        )
        
    }

}
