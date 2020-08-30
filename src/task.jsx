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
            content: ''
        }
    }

    update = (e) => {
        this.setState({content: e.currentTarget.value})
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
                    {this.props.task.content}
                    <input type="text" value={this.state.content} onChange={(e) => this.update(e)}/>
                    <button onClick={() => editTask(task.id, this.state.content)}>Edit</button>
                    <button onClick={() => removeTask(columnId, task.id)}>-</button>
                </Container>
                    
                )}
            </Draggable>
            
        )
        
    }

}
