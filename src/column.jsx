import React from 'react'
import styled from 'styled-components'
import Task from './task'
import {Droppable, Draggable} from 'react-beautiful-dnd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from './task';
import { AddTask } from './add_task'

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
const Title = styled.h3`
  display: ${(props) => (!props.editShow ? "flex" : "none")};
  justify-content: space-between;
  padding: 8px;
  width: 80%;
`;

const TaskList = styled.div`
  padding: 8px;
  background-color: ${(props) => (props.isDraggingOver ? "skyblue" : "inherit")};
  flex-grow: 1;
  min-height: 100px;
`;

export const EditContainer = styled.div`
   display: ${(props) => (props.editShow ? "flex" : "none")};
   justify-content: space-between;
   align-items: baseline;
   margin-bottom: 8px;
   width: 80%;
`;

const DeleteContainer = styled.div`
   display: ${(props) => (props.deleteShow ? "flex" : "none")};
   justify-content: space-around;
   align-items: baseline;
   width: 80%;

   & > button {
        cursor: pointer;
   };
`;

const Input = styled.input`
    width: 60%;
`


export default class Column extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        title: this.props.column.title,
        editShow: false,
        deleteShow: false,
      }
    }

    update(e) {
      this.setState({title: e.currentTarget.value})
    }

    toggle = () => {
      this.setState({ editShow: !this.state.editShow })
    }
    

    render() {
   
    let { addTask, removeTask, editTask, editColTitle, removeCol, column } = this.props
       return (
    <Draggable draggableId={this.props.column.id} index={this.props.index}>
        { provided =>(

            <Container {...provided.draggableProps} 
            ref={provided.innerRef}>
            <Title {...provided.dragHandleProps} editShow={this.state.editShow}>
                  {this.props.column.title}
                 <Button onClick={() => this.toggle()}>
                   <FontAwesomeIcon icon="user-edit" />
                 </Button>
            </Title>
            <EditContainer editShow={this.state.editShow}>
                 <Input type="text" value={this.state.title} onChange={(e) => this.update(e)}/>
                 <Button onClick={() => { editColTitle(column.id, this.state.title); this.toggle() }}><FontAwesomeIcon icon="pencil-alt" /></Button>
                 <Button onClick={() => {this.setState({deleteShow: !this.state.deleteShow})}}><FontAwesomeIcon icon="trash" /></Button>
            </EditContainer>
            <DeleteContainer deleteShow={this.state.deleteShow}>
                 <p>Delete Column?</p>
                 <button onClick={() => removeCol(column.id)}>Yes</button>
                 <button onClick={() => { this.setState({ deleteShow: !this.state.deleteShow })}}>No</button>
            </DeleteContainer>

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
                {this.props.tasks.map((task, index) => (
                
                  <Task 
                    key={task.id} 
                    task={task} 
                    index={index}
                    columnId={column.id}
                    removeTask={removeTask}
                    editTask={editTask}
                  />))}
                {provided.placeholder}
                </TaskList>
                )}
            </Droppable>
                <AddTask addTask={addTask} columnId={column.id}/>
               {/* <AddTask onClick={() => addTask(column.id)}><FontAwesomeIcon icon="plus" /> Add Task</AddTask> */}
        </Container>
        )}
    </Draggable>

       )
   }
}
