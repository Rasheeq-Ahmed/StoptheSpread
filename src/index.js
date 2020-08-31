import React from 'react';
import ReactDOM from 'react-dom';
import initialData from './initial-data';
import '@atlaskit/css-reset'
import styled from 'styled-components';
import Splash from './splash';
import Board from './board';
import Sidebar from './sidebar'
import {Resources} from './resources'
import { Info } from './info'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fab, fas, far)


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      splash: true,
      board: false,
      info: true,
      resource: false,
    }
    this.handleSplash = this.handleSplash.bind(this);
    this.toggle = this.toggle.bind(this);
  }


  handleSplash(e) {
    e.preventDefault();

    this.setState({ splash: false });
  }

  toggle(e, param) {
    e.preventDefault();


    this.setState({[param]: true })

    let state = {
      board: true,
      info: true,
      resource: true,
    }

    delete state[param]

    let res = Object.keys(state)
    res.forEach(ele => {
      this.setState({[ele]: false})
    })

  };

  render() {
    const splash = this.state.splash
    return (
      <div className='index-all'>
        {splash ? (
          <Splash handleSplash={this.handleSplash} />

        ) : (
        <div>
          <div className='splash-title'>
            <h1>Stop The Spread</h1>
          </div>
          <Sidebar toggle={this.toggle} info={this.state.info} board={this.state.board} resource={this.state.resource}/>
          <Info info={this.state.info}/>
          <Board board={this.state.board}/>
          <Resources resource={this.state.resource}/> 
          </div> )}
        </div>

      //
    );
  }
}





ReactDOM.render(<App />, document.getElementById('root'));
