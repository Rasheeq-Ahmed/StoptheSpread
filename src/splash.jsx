import React from 'react';
import {useSpring,useTransition, animated} from 'react-spring'
import './All.css'


const Splash = (props) =>  {
        
        // const fade = useSpring({
        //     config: {
        //         // delay: 5000,
        //         // duration: 1000
        //     },
        //     from: {
        //         opacity: 0
        //     },
        //     to: {
        //         opacity: 1
        //     },
        // })
        const fade2 = useSpring({
            config: {
                // delay: 5000,
                duration: 2000
            },
            from: {
                opacity: 0
            },
            to: {
                opacity: 1
            },
        })

        

    

        return (
          <animated.div className="splash-back">
            <animated.div className="splash-title" >
              <h1>Stop The Spread</h1>
            </animated.div>
            <animated.div className="splash-body" style={fade2}>
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
                  <button onClick={props.handleSplash}>Learn More</button>
                </div>
              </div>
            </animated.div>
          </animated.div>
        );
    
}


export default Splash

