import React from 'react'
import styled from 'styled-components'
import Task from './task'
import {Droppable, Draggable} from 'react-beautiful-dnd'

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  width: 220px;
  background-color: #fdffb6;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
  background-color: ${(props) => (props.isDraggingOver ? "skyblue" : "inherit")};
  flex-grow: 1;
  min-height: 100px;
`;


export default class Column extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        title: ''
      }
    }

    update(e) {
      this.setState({title: e.currentTarget.value})
    }

   render() {
   
    let { editColTitle, removeCol, column } = this.props
       return (
    <Draggable draggableId={this.props.column.id} index={this.props.index}>
        { provided =>(

            <Container {...provided.draggableProps} 
            ref={provided.innerRef}>
            <Title {...provided.dragHandleProps}>
            {this.props.column.title}
            </Title>
            <input type="text" value={this.state.title} onChange={(e) => this.update(e)}/>
            <button onClick={() => editColTitle(column.id, this.state.title )}>Edit</button>
            <button onClick={() => removeCol(column.id)}>Remove</button>
            <Droppable 
            droppableId={this.props.column.id}
            
            // type={this.props.column.id === 'column-3' ? 'done': 'active'}
            // isDropDisabled={this.props.isDropDisabled}
            >
                {(provided, snapshot) => (
                    <TaskList
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    isDraggingOver={snapshot.isDraggingOver}
                    >
                {this.props.tasks.map((task, index) => <Task key={task.id} task={task} index={index}/>)}
                {provided.placeholder}
                </TaskList>
                )}
            </Droppable>
        </Container>
        )}
    </Draggable>

       )
   }
}
