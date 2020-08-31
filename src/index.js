import React from 'react';
import ReactDOM from 'react-dom';
import initialData from './initial-data';
import '@atlaskit/css-reset'
import {DragDropContext, Droppable} from 'react-beautiful-dnd'
import styled from 'styled-components';
import Column from './column';
import {AddColumn} from './add_column';
import Splash from './splash'

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fab, fas, far)


const Container = styled.div`
    display: flex;
`;


class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleSplash = this.handleSplash.bind(this)
  }
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

  addCol = (title = "New Group") => {
    let colLength = Object.values(this.state.columns).length;
    let newColId = `column-${++colLength}`;

    const newColumn = {
      id: newColId,
      title: title,
      taskIds: [],
    };

    let colOrder = this.state.columnOrder;
    colOrder.push(newColId);

    let newColumns = this.state.columns;
    newColumns[newColId] = newColumn;

    const newState = {
      ...this.state,
      columns: {
        ...newColumns,
      },

      columnOrder: colOrder,
    };
    this.setState(newState);
  };

  removeCol = (columnId = null) => {
    let { columns, columnOrder } = this.state;
    let newColumns = columns;
    delete newColumns[columnId];

    let removeIdx = columnOrder.indexOf(columnId);
    let newColumnOrder = columnOrder
      .slice(0, removeIdx)
      .concat(columnOrder.slice(removeIdx + 1));

    let newState = {
      ...this.state,
      columns: {
        ...newColumns,
      },
      columnOrder: newColumnOrder,
    };

    this.setState(newState);
  };

  editColTitle = (columnId, text) => {
    let { columns } = this.state;

    let current = columns[columnId];
    current.title = text;

    let updateCol = {
      ...columns,
      columnId: current,
    };

    let newState = {
      ...this.state,
      columns: updateCol,
    };

    this.setState(newState);
  };

  addTask = (columnId, content="") => {
    let { tasks, columns } = this.state;
    let taskLength = Object.values(tasks).length;
    let taskId = `task-${++taskLength}`;

    let newTasks = {
      ...tasks,
      [taskId]: {
        id: taskId,
        content: content,
        details: ""
      }
    };

    let current = columns[columnId];
    let currentTasks = columns[columnId].taskIds;
    currentTasks.push(taskId);
    current.taskIds = currentTasks;

    let newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [columnId]: current,
      },
      tasks: newTasks,
    };

    this.setState(newState);
  };

  removeTask = (columnId, taskId) => {
    let { tasks, columns } = this.state;

    let currentTaskIds = columns[columnId].taskIds;
    let removeIdx = currentTaskIds.indexOf(taskId);
    let newTaskIds = currentTaskIds
      .slice(0, removeIdx)
      .concat(currentTaskIds.slice(++removeIdx));

    let newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [columnId]: {
          ...this.state.columns[columnId],
          taskIds: newTaskIds,
        },
      },
    };

    this.setState(newState);
  };

  editTask = (taskId, param, text) => {
    let { tasks } = this.state

    let current = tasks;
    current[taskId][param] = text

    let newState = {
      ...this.state,
      tasks: current,
    };
    this.setState(newState);
  };

  onDragStart = (start) => {
    const homeIndex = this.state.columnOrder.indexOf(start.source.droppableId);

    this.setState({
      homeIndex,
    });
  };

  onDragEnd = (result) => {
    this.setState({
      homeIndex: null,
    });
    // todo: reorder our column
    // document.body.style.color = "inherit";

    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (type === "column") {
      const newColumnOrder = Array.from(this.state.columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      const newState = {
        ...this.state,
        columnOrder: newColumnOrder,
      };
      this.setState(newState);
      return;
    }

    const start = this.state.columns[source.droppableId];
    const finish = this.state.columns[destination.droppableId];

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
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    this.setState(newState);
  };

  handleSplash(e) {
    e.preventDefault();

    this.setState({ splash: false });
  }

  render() {
    const splash = this.state.splash;
    return (
      <div>
        {splash ? (
          <Splash handleSplash={this.handleSplash} />
        ) : (
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
                <Container {...provided.droppableProps} ref={provided.innerRef}>
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
                        removeCol={this.removeCol.bind(this)}
                        editColTitle={this.editColTitle.bind(this)}
                        addTask={this.addTask.bind(this)}
                        removeTask={this.removeTask.bind(this)}
                        editTask={this.editTask.bind(this)}
                      />
                    );
                  })}
                  {provided.placeholder}
                </Container>
              )}
            </Droppable>
            <AddColumn addCol={this.addCol.bind(this)} colOrder={this.state.columnOrder}/>
            {/* <button onClick={() => this.addCol("Hackathon")}>Add Column</button> */}
            {/* <button onClick={()=> this.editTask("task-1", 'Win Hackathon')}>Edit Task</button> */}
          </DragDropContext>
        )}
      </div>

      //
    );
  }
}





ReactDOM.render(<App />, document.getElementById('root'));
