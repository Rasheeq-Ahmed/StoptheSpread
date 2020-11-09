import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import './info.css';
import './All.css'
import { cleanup } from '@testing-library/react';
const Container = styled.div`
    width: 100%;
    height: 90vh;
    display: ${(props) => (props.info ? 'flex' : 'none')};
    justify-content: center;
    align-items: center;
`


export const Info = (props) => {

    const [current, setCurrent] = useState(1)

    useEffect( () => {
        let interval = setInterval(scroll, 8000)

        return function cleanup() {
            clearInterval(interval)
        }
    })

    const scroll = () => {
        if (current === 3) {
            setCurrent(1)
        } else {
            setCurrent(current + 1)
        }
    };

    return (
        <Container info={props.info}>
            <div className="about-all">
                
                <div className="about-1">
                    <img src="https://blog.capterra.com/wp-content/uploads/2019/10/HEAD-Top_9_Medical_Apps_for_Doctors_Hero_no_text.png" alt=""/>
                    <div className="objective">
                        <h1 className="">Objective</h1>
                        <p>Stop The Spread is a kanban board project that was completed for Mintbean's Javascript Olympics Hackathon. This project was built with a mission of providing resource and information for Covid-19.</p>
    
                    </div>
                </div>
                <div className="about-2">
                    <div className="duration">
                        <h2>Duration</h2>
                        <img src="https://i.imgur.com/Nc2p740.png" alt=""/>
                        <p>48hrs</p>

                    </div>
                    <div className="prize">
                        <h2>Mintbean Hackathon</h2>
                        <img src="https://i.imgur.com/Rhi2W9b.png" alt=""/>
                        <p>Honorable Mention</p>
                    </div>
                    <div className="tech">
                        <h2>Technology</h2>
                        <img src="https://i.imgur.com/xQhefcL.png" alt=""/>
                        <p>Javascript</p>

                    </div>
                  
                </div>
{/*                 
                <div className="about-3">
                <h1>Created by</h1>
                <div className="about-2">
                    <div className="duration">
                        <img src="https://i.imgur.com/Nc2p740.png" alt=""/>
                        <h2>Rasheeq Ahmed</h2>
                        <p>48hrs</p>

                    </div>
                    <div className="prize">
                        <h2>Mintbean Hackathon</h2>
                        <img src="https://i.imgur.com/Rhi2W9b.png" alt=""/>
                        <p>Honorable Mention</p>
                    </div>
                    <div className="tech">
                        <h2>Technology</h2>
                        <img src="https://i.imgur.com/xQhefcL.png" alt=""/>
                        <p>Javascript</p>

                    </div>
                  
                </div>

                </div> */}






                <div className="about-body">
                    <div className="about-people-all">
                        <h1 id='team'>Created by</h1>
                        <div className="about-team-members">

                            <div className="person">
                                <div className="person-pic">
                                    <img src="https://i.imgur.com/9TC4MxW.jpg" alt="" />
                                </div>
                                <h4 className="person-name">Rasheeq Ahmed</h4>
                                <div className="person-links">
                                    <a href="https://www.linkedin.com/in/rasheeq-ahmed-53b7aa91/" target="_blank">
                                        <img id="linked-icon" src="https://i.imgur.com/Xm1qtqN.png" />
                                    </a>
                                    <a href="https://github.com/Rasheeq-Ahmed" target="_blank">
                                        <img id="git-icon" src="https://i.imgur.com/vwPks93.png" />
                                    </a>
                                </div>

                            </div>
                            <div className="person">
                                <div className="person-pic">
                                    <img src="https://i.imgur.com/vK31w0L.jpg" alt="" />
                                </div>
                                <h4 className="person-name">Eric Chen</h4>

                                <div className="person-links">
                                    <a href="https://i.imgur.com/vK31w0L.jpg" target="_blank">
                                        <img id="linked-icon" src="https://i.imgur.com/Xm1qtqN.png" />
                                    </a>
                                    <a href="https://github.com/echen831" target="_blank">
                                        <img id="git-icon" src="https://i.imgur.com/vwPks93.png" />
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* <div className="about-proj">
                        <div className="about-proj-tech">
                            <div className="tech-title">
                                <h3>Javascript Bootcamp Olympics</h3>
                            </div>
                            <div className="tech-icons">
                                <ul>
                                    <a href="https://www.mintbean.io/" target="_blank">
                                        <li><img id='mongo-icon' src="https://www.mintbean.io/img/bean.6bcf6ea5.png" alt="" /></li>
                                    </a>
                                    <a href="https://featurepeek.com/" target="_blank">
                                        <li ><img id='express-icon' src="https://docs.featurepeek.com/img/logo-sprite.png" alt="" /></li>
                                    </a>
                                    <li><img src="https://www.mintbean.io/img/mintbean-logo.1474c6b6.png" alt="" /></li>
                                    <li><img src="https://i.imgur.com/aRRChFH.png" alt="" /></li>
                                </ul>
                            </div>

                        </div>
                    </div> */}
                </div>

                <div className="about-footer"></div>
            </div>
        </Container>
    )

};