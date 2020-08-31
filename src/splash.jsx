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

              {/* <svg viewBox="0 0 64 64" height='512' width='512' xmlns="http://www.w3.org/2000/svg"><g id="facemask-coronavirus-faceshield-protect-covid19"><g fill="#9bc9ff"><path d="m58.508 55.325a16 16 0 0 0 -14.53-14.26 13.008 13.008 0 0 1 -23.956 0 16 16 0 0 0 -14.546 14.3l-.476 5.635h54z" /><path d="m38 3h-6a3.995 3.995 0 0 0 -4 4 3 3 0 0 0 -3-3h-1a6 6 0 0 0 -6 6v1h28a8 8 0 0 0 -8-8z" /><path d="m25 15h24a2 2 0 0 0 0-4h-34a2 2 0 0 0 0 4z" /><path d="m39 15a4 4 0 0 1 4 4h2a1.975 1.975 0 0 1 1 .279v-4.279z" /><path d="m19 19h2a4 4 0 0 1 4-4h-7v4.279a1.975 1.975 0 0 1 1-.279z" /><path d="m32 24-7 2v8.485a11 11 0 0 0 14 0v-8.485z" /></g><path d="m59.5 55.22a16.956 16.956 0 0 0 -16.9-15.22h-3.6a1 1 0 0 1 -1-1v-1h8.62a5.006 5.006 0 0 0 4.98-5.45l-1.52-16.76a2.995 2.995 0 0 0 -1.08-5.79h-2.06a9.016 9.016 0 0 0 -8.94-8h-6a5.013 5.013 0 0 0 -3.54 1.47 4.562 4.562 0 0 0 -.6.73 4 4 0 0 0 -2.86-1.2h-1a7.008 7.008 0 0 0 -7 7h-2a2.995 2.995 0 0 0 -1.08 5.79l-1.52 16.76a5.006 5.006 0 0 0 4.98 5.45h8.62v1a1 1 0 0 1 -1 1h-3.61a16.95 16.95 0 0 0 -16.91 15.28l-.48 5.64a.995.995 0 0 0 1 1.08h54a1 1 0 0 0 1-1.09zm-21.5-21.32a9.608 9.608 0 0 1 -5.8 2.1h-.18a9.861 9.861 0 0 1 -6.02-2.01v-7.24l6-1.71 6 1.71zm10.83 1.12a2.955 2.955 0 0 1 -2.21.98h-8.11c.39-.27.77-.55 1.14-.86l.05-.05a.01.01 0 0 0 .01-.01 12.5 12.5 0 0 0 4.2-8.08h1.09a3.009 3.009 0 0 0 3-3v-3a2.986 2.986 0 0 0 -1-2.22v-2.78h1.09l1.52 16.73a2.935 2.935 0 0 1 -.78 2.29zm-8.83-3.22v-5.39l2-2v1.23c0 .09 0 .19-.01.33a10.537 10.537 0 0 1 -1.99 5.83zm5-13.8h-1.1a4.84 4.84 0 0 0 -.93-2h2.03zm1 3v3a1 1 0 0 1 -1 1h-1v-5h1a1 1 0 0 1 1 1zm-22-16h1a2.006 2.006 0 0 1 2 2 1 1 0 0 0 2 0 2.988 2.988 0 0 1 3-3h6a7 7 0 0 1 6.92 6h-25.92a5 5 0 0 1 5-5zm-10 8a1 1 0 0 1 1-1h34a1 1 0 0 1 0 2h-34a1 1 0 0 1 -1-1zm8 11.41 2 2v5.57a9.979 9.979 0 0 1 -2-5.98zm-3-6.41v-2h2.03a4.84 4.84 0 0 0 -.93 2zm1 2v5h-1a1 1 0 0 1 -1-1v-3a1 1 0 0 1 1-1zm-2.62 16a3.016 3.016 0 0 1 -2.99-3.27l1.52-16.73h1.09v2.78a2.986 2.986 0 0 0 -1 2.22v3a3.009 3.009 0 0 0 3 3h1.06a11.958 11.958 0 0 0 4.23 8.19h.01l.06.06.01-.01a.01.01 0 0 1 .01.01l-.01.01a10.327 10.327 0 0 0 1 .74zm7.91-11.12-3.29-3.29v-2.59a3.009 3.009 0 0 1 3-3h14a3.009 3.009 0 0 1 3 3v2.59l-3.29 3.29-6.44-1.84a.991.991 0 0 0 -.54 0zm-.29 17.12a3.009 3.009 0 0 0 3-3v-1h8v1a3.009 3.009 0 0 0 3 3h3.39a12 12 0 0 1 -20.78 0zm23 18v-7a1 1 0 0 0 -2 0v7h-28v-7a1 1 0 0 0 -2 0v7h-9.91l.38-4.53a14.955 14.955 0 0 1 12.95-13.33 14 14 0 0 0 25.16 0 14.95 14.95 0 0 1 12.93 13.27l.4 4.59z" fill="#1e81ce" /><path d="m36 23a1 1 0 0 0 1-1v-1a1 1 0 0 0 -2 0v1a1 1 0 0 0 1 1z" fill="#1e81ce" /><path d="m28 23a1 1 0 0 0 1-1v-1a1 1 0 0 0 -2 0v1a1 1 0 0 0 1 1z" fill="#1e81ce" /><path d="m29 30h6a1 1 0 0 0 0-2h-6a1 1 0 0 0 0 2z" fill="#1e81ce" /><path d="m36 32a1 1 0 0 0 -1-1h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 1-1z" fill="#1e81ce" /></g></svg> */}
              <h1>Stop The Spread

              </h1>
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
                    With over 25 million reported cases worldwide 
                    and over 6 million cases reported in the United States,
                    Coronavirus(COVID-19) is still an issue that we are facing.
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

