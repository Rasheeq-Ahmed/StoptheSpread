import React from 'react';
import ReactDOM from 'react-dom';
import initialData from './initial-data';
import '@atlaskit/css-reset'
import {DragDropContext, Droppable} from 'react-beautiful-dnd'
import Column from './column';
import styled from 'styled-components'


  const Container = styled.div`
    display: flex;

  `;



class App extends React.Component {
  state = initialData;

  // onDragStart = () => {
  //   document.body.style.color = 'orange';
  //   document.body.style.transition = 'background-color 0.2s ease';
  // }

  // onDragUpdate = update => {
  //   const { destination } = update;
  //   const opacity = destination
  //   ? destination.index / Object.keys(this.state.tasks).length
  //   : 0
  //   document.body.style.backgroundColor = `rgba(153, 141,217, ${opacity})`;
  // }

  add = (title = 'New Group') => {

    let colLength = Object.values(this.state.columns).length
    let newColId = `column-${++colLength}`

    const newColumn = {
      id: newColId,
      title: title,
      taskIds: []
    }

    let colOrder = this.state.columnOrder
    colOrder.push(newColId)

    let newColumns = this.state.columns
    newColumns[newColId] = newColumn

    const newState = {
      ...this.state,
      columns: {
        ...newColumns
      },

      columnOrder: colOrder
    }
    this.setState(newState)
    console.log(this.state)
  };



  onDragStart = start => {
    const homeIndex = this.state.columnOrder.indexOf(start.source.droppableId);

    this.setState({
      homeIndex,
    })
  }
  
  onDragEnd = result => {
    this.setState({
      homeIndex: null
    })
    // todo: reorder our column
    // document.body.style.color = "inherit";

    const {destination, source, draggableId, type} = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (type ==='column') {
      const newColumnOrder = Array.from(this.state.columnOrder)
      newColumnOrder.splice(source.index,1)
      newColumnOrder.splice(destination.index, 0, draggableId)

      const newState = {
        ...this.state,
        columnOrder: newColumnOrder,
      }
      this.setState(newState);
      return;
       
    }



    const start = this.state.columns[source.droppableId]
    const finish = this.state.columns[destination.droppableId]

    if (start == finish) {
       const newTaskIds = Array.from(start.taskIds);
       newTaskIds.splice(source.index, 1);
       newTaskIds.splice(destination.index, 0, draggableId);

       const newColumn = {
         ...start,
         taskIds: newTaskIds,
       };

       const newState = {
         ...this.state,
         columns: {
           ...this.state.columns,
           [newColumn.id]: newColumn,
         },
       };

       this.setState(newState);
       return;
    }

    // Moving from one list to another
       const startTaskIds = Array.from(start.taskIds);
       startTaskIds.splice(source.index, 1);
       const newStart = {
         ...start,
         taskIds: startTaskIds,
       }
       
       const finishTaskIds = Array.from(finish.taskIds);
       finishTaskIds.splice(destination.index,0, draggableId)
       const newFinish ={
         ...finish,
         taskIds: finishTaskIds,
       };

       const newState = {
         ...this.state,
         columns: {
           ...this.state.columns,
           [newStart.id]: newStart,
           [newFinish.id]: newFinish,
         }
       }
       this.setState(newState)

  }

  render(){
    return (
      <DragDropContext
        onDragStart={this.onDragStart}
        // onDragUpdate={this.onDragUpdate}
        onDragEnd={this.onDragEnd}
      >
        <Droppable
          droppableId="all-columns"
          direction="horizontal"
          type="column"
        >
          {(provided) => (
            <Container
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {this.state.columnOrder.map((columnId, index) => {
                const column = this.state.columns[columnId];
                const tasks = column.taskIds.map(
                  (taskId) => this.state.tasks[taskId]
                );
                const isDropDisabled = index < this.state.homeIndex;
                return (
                  <Column
                    key={column.id}
                    column={column}
                    tasks={tasks}
                    isDropDisabled={isDropDisabled}
                    index={index}
                  />
                );
              })}
              {provided.placeholder}
            </Container>
          )}
        </Droppable>
        <button onClick={()=> this.add('Hackathon')}>Add</button>
      </DragDropContext>
    );
  }

}





ReactDOM.render(<App />, document.getElementById('root'));