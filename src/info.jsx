import React from 'react';
import styled from 'styled-components';
import './info.css';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: ${(props) => (props.info ? 'flex' : 'none')};
    justify-content: center;
    align-items: center;
`


export const Info = (props) => {

    return (
        <Container info={props.info}>
            <div className="about-all">
                <div>
                    <h1>Dear Mintbeans, we have saved you from this!</h1>
                    <img 
                        className='kanban-board'
                        src="https://lh5.googleusercontent.com/NxOTs7vImwFMmQnfI_pTg7Es6ZeGPL1AcJaHRrXURM0IaRVi64WFeWschD9paRwJ8MVR4EnQ6P7R8D3mEpHB7PAy648lejPuQ3FrTP3-igSBy23dDhU=w1280" alt=""/>
                    <div className='info-body'>
                        <div className='info-body-left'>
                            <ul> 
                                <li>
                                    We have some preset tasks that will keep you safe!
                                </li>
                                <li>
                                    Check out more resources on the Resources tab.
                                </li>
                                <li>
                                    Enjoy the kanban board and save some post its!
                                </li>
                            </ul>
                        </div>

                        <div className='info-body-left'>

                        </div>
                    </div>
                </div>
                <div className="about-body">
                    <div className="about-people-all">
                        <h1 id='team'>Team</h1>
                        <div className="about-team-members">

                            <div className="person">
                                <div className="person-pic">
                                    <img src="https://media-exp1.licdn.com/dms/image/C4E03AQE2m-9v0zZZ7g/profile-displayphoto-shrink_400_400/0?e=1604534400&v=beta&t=rdFDe2NOgVHgx4yD18x6fyufE2WJFzbAgazbTj7ReRM" alt="" />
                                </div>
                                <div className="person-name">Rasheeq Ahmed</div>
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
                                    <img src="https://media-exp1.licdn.com/dms/image/C4E03AQHpVC12czSFEQ/profile-displayphoto-shrink_400_400/0?e=1604534400&v=beta&t=LZCCOIV9PXZBlznYV1igk5oSjbYodkH4QWiyvpBygoM" alt="" />
                                </div>
                                <div className="person-name">Eric Chen</div>

                                <div className="person-links">
                                    <a href="https://www.linkedin.com/in/eric-chen-782b951a9/" target="_blank">
                                        <img id="linked-icon" src="https://i.imgur.com/Xm1qtqN.png" />
                                    </a>
                                    <a href="https://github.com/echen831" target="_blank">
                                        <img id="git-icon" src="https://i.imgur.com/vwPks93.png" />
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="about-proj">
                        <div className="about-proj-tech">
                            <div className="tech-title">
                                <h1>Javascript Olympics</h1>
                            </div>
                            <div className="tech-icons">
                                <ul>

                                </ul>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="about-footer"></div>
            </div>
        </Container>
    )

};