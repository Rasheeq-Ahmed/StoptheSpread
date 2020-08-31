import React from 'react';
import styled from 'styled-components';
import {Draggable} from 'react-beautiful-dnd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Container = styled.div`
    border: 1px solid lightgrey;
    border-radius: 2px;
    padding: 8px;
    margin-bottom: 8px;
    background-color: ${props => (props.isDragDisabled ? 'lightgrey': props.isDragging ? 'lightgreen' : 'white')};
    display: flex;
    flex-direction: column;
    min-width: 200px;
`;

const StatusContainer = styled.div`
   max-height: ${(props) => (props.statusShow ? "10em" : "0")};
   opacity: ${(props) => (props.statusShow ? 1 : 0)};
   overflow-y: hidden;
   transition: 0.5s ease;
   display: flex;
   justify-content: space-around;
   align-items: center;
   width: 100%;
   padding-top: 2px;
   border-top: 1px solid grey;

   & > span {
       cursor: pointer;
   }
`;

export const EditContainer = styled.div`
   max-height: ${(props) => (props.editShow ? "10em" : "0")};
   opacity: ${(props) => (props.editShow ? 1 : 0)};
   overflow-y: hidden;
   transition: 0.5s ease;
   display: flex;
   justify-content: space-between;
   align-items: baseline;
   width: max-content;
`;

const EditDetail = styled.div`
   max-height: ${(props) => (props.editDetailShow ? "10em" : "0")};
   opacity: ${(props) => (props.editDetailShow ? 1 : 0)};
   overflow-y: hidden;
   transition: 0.5s ease;
   display: flex;
   justify-content: space-between;
   align-items: baseline;
   width: max-content;
`;

const DetailContainer = styled.div`
   max-height: ${(props) => (props.detailShow ? "10em" : "0")};
   max-width: 180px;
   opacity: ${(props) => (props.detailShow ? 1 : 0)};
   overflow-y: hidden;
   transition: 0.5s ease;
   justify-content: space-between;
   margin-bottom: 8px;

   & > span {
       width: 160px;
       margin-top: 10px;
       display: flex;
       justify-content: space-between;
       cursor: pointer
   }

   & > p {
      margin-left: 10px;
      max-width: 150px;
      overflow-wrap: break-word; 
   };
   
`;

export const Button = styled.span`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    width: 2.5rem;
    height: 2.5rem;
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

   & > span {
       font-weight: bold;
   }
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
            detail: '',
            editShow: false,
            statusShow: false,
            detailShow: false,
            editDetailShow: false,
        }

    }

    update = (e, param) => {
        this.setState({[param]: e.currentTarget.value});
    };

    toggle = (param) => {
        this.setState({[param]: !this.state[param]});
    };

    mainToggle = () => {
        this.toggle("statusShow");
        this.toggle("detailShow");

        if (this.state.editShow) {
            this.toggle("editShow")
        };

        if (this.state.editDetailShow) {
            this.toggle("editDetailShow")
        };
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
                        <span>{this.props.task.content}</span>
                        <span onClick={() => {this.mainToggle()}}>
                                {!this.state.statusShow ? <FontAwesomeIcon icon="chevron-circle-down" /> : <FontAwesomeIcon icon="chevron-circle-up" />}
                        </span>
                    </TitleContainer>
                    <EditContainer editShow={this.state.editShow} content={this.state.content}>
                        <Input type="text" value={this.state.content} onChange={(e) => this.update(e, 'content')}/>
                            <Button onClick={ this.state.content.length ? () => { editTask(task.id, "content", this.state.content); this.toggle("editShow") } : ()=>this.toggle("editShow")}><FontAwesomeIcon icon="pencil-alt"/></Button>
                    </EditContainer>
                    <DetailContainer detailShow={this.state.detailShow}>
                            <span>Details: </span>
                            <p>{task.details}</p>
                        
                    </DetailContainer>
                    <EditDetail editDetailShow={this.state.editDetailShow}>
                        
                        <Input type="text" value={this.state.detail} onChange={(e) => this.update(e, 'detail')} />
                            <Button onClick={this.state.detail !== "" ? () => { editTask(task.id, "details", this.state.detail); this.toggle("editDetailShow") } : ()=> this.toggle("editDetailShow")}><FontAwesomeIcon icon="pencil-alt" /></Button>
                    </EditDetail>
                    <StatusContainer statusShow={this.state.statusShow}>
                            <Button onClick={() => this.toggle("editShow")}><FontAwesomeIcon icon="marker" />Title</Button> 
                            <Button onClick={ () => {this.toggle("editDetailShow")}}><FontAwesomeIcon icon="pen-fancy" />Details</Button>
                            <Button onClick={()=> removeTask(columnId,task.id)}><FontAwesomeIcon icon="trash" />Delete</Button>
                    </StatusContainer>
                </Container>
                    
                )}
            </Draggable>
            
        )
        
    }

}
