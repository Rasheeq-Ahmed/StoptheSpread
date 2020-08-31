import React from 'react'
import styled from 'styled-components'
import Task from './task'
import {Droppable, Draggable} from 'react-beautiful-dnd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from './task';
import { AddTask } from './add_task'
import "./All.css"

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  width: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
  margin-top: 5em;
`;
const Title = styled.h3`
  background-color: #03045e;
  display: ${(props) => (!props.editShow ? "flex" : "none")};
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  height: 2em;
  width: 100%;
  color: white;

  & > span:last-child {
    display: ${(props) => (props.priority !== "high" ? "flex" : "none")}
  }
`;

const TaskList = styled.div`
  padding: 8px;
  background-color: ${(props) =>
    props.isDraggingOver ? "#bdb2ff" : "inherit"};
  overflow-y: scroll;
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
   flex-direction: column;
   justify-content: center;
   align-items: center;
   width: 80%;

   & > div {
     display: flex;
     justify-content: space-between;
     width: 50%;
   };

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
        taskModalShow: false,
        currentTask: null
      }
    }

    update(e) {
      e.preventDefault();
      this.setState({title: e.currentTarget.value})
    }

    toggle = () => {
      this.setState({ editShow: !this.state.editShow })
    }

    toggleTaskModal = (taskId = null) => {

      if (taskId) {
        this.setState({taskModalShow: true, currentTask: taskId})
      } else {
        this.setState({taskModalShow: false, currentTask: null})
      }
    };

    

    render() {
   
    let { addTask, removeTask, editTask, editColTitle, removeCol, column } = this.props
       return (
    <Draggable draggableId={this.props.column.id} index={this.props.index}>
        { provided =>(

            <Container {...provided.draggableProps} 
            ref={provided.innerRef}>
            <Title {...provided.dragHandleProps} editShow={this.state.editShow} priority={column.priority}>
                  <span>{this.props.column.title}</span>
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
                 <div>
                  <button onClick={() => removeCol(column.id)}>Yes</button>
                  <button onClick={() => { this.setState({ deleteShow: !this.state.deleteShow })}}>No</button>
                 </div>
            </DeleteContainer>

            <Droppable 
            droppableId={this.props.column.id}
            
            // type={this.props.column.id === 'column-3' ? 'done': 'active'}
            // isDropDisabled={this.props.isDropDisabled}
            >
                {(provided, snapshot) => (
                    <TaskList
                    
                    className='tasklist'
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    isDraggingOver={snapshot.isDraggingOver}
                    >
                {this.props.tasks.map((task, index) => (
                  <div key={task.id}>
                    <Task 
                      task={task} 
                      index={index}
                      columnId={column.id}
                      removeTask={removeTask}
                      editTask={editTask}
                      toggle={this.toggleTaskModal.bind(this)}
                      /> 

                    {/* <TaskModal toggle={this.toggleTaskModal.bind(this)}
                               task={task}
                               show={this.state.taskModalShow}
                               current={this.state.currentTask}

                    /> */}
                  </div>
                    ))}
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
