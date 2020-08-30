import React from 'react';
import './All.css'

export default class Splash extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {

        return (
          <div className="splash-back">
            <div className="splash-title">
              <h1>Stop The Spread</h1>
            </div>
            <div className="splash-body">
              <div className="splash-left"></div>
              <div className="splash-right">
                <div className="splash-img"></div>
                <div className="splash-headline">
                  <h1>Make the World a Better Place</h1>
                </div>
                <div className="splash-subtext">
                  <p>
                    {/* Take steps to care for yourself and help protect others in
                    your home and community. */}
                  </p>
                  <p>
                    Take steps to care for yourself and help protect others in
                    your home and community.
                  </p>
                </div>
                <div className="splash-button">
                  <button onClick={this.props.handleSplash}>Learn More</button>
                </div>
              </div>
            </div>
          </div>
        );
    }
}


