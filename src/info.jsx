import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import './info.css';
import { cleanup } from '@testing-library/react';
const Container = styled.div`
    width: 100%;
    height: 100%;
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
                <div>
                    <header className='header'>
                    <h1>Dear Mintbeans, 
                        <br />
                        we have saved you from this!</h1>
                    <img 
                        className='kanban-board'
                        src="https://lh5.googleusercontent.com/NxOTs7vImwFMmQnfI_pTg7Es6ZeGPL1AcJaHRrXURM0IaRVi64WFeWschD9paRwJ8MVR4EnQ6P7R8D3mEpHB7PAy648lejPuQ3FrTP3-igSBy23dDhU=w1280" alt=""/>
                    </header>
                    <div className='info-body'>
                        <div className='info-body-left'>
                            <img id={current === 1 ? '' : 'hide'} className='kanban-pics' src={"./kanban1.png"} alt=""/>
                            <img id={current === 2 ? '' : 'hide'} className='kanban-pics' src={"./kanban3.png"} alt="" />
                            <img id={current === 3 ? '' : 'hide'} className='kanban-pics' src={"./kanban2.png"} alt="" />
                        </div>

                        <div className='info-body-left'>
                            <ul> 
                                <h3 id={current === 1 ? 'selected' : ''}>
                                    We have some preset tasks that will keep you safe!
                                </h3>
                                <h3 id={current === 2 ? 'selected' : ''}>
                                    Check out more resources on the Resources tab.
                                </h3>
                                <h3 id={current === 3 ? 'selected' : ''}>
                                    Enjoy the kanban board and save some post its!
                                </h3>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="about-body">
                    <div className="about-people-all">
                        <h1 id='team'>Created by</h1>
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
                                    {/* <li><img src="https://www.mintbean.io/img/mintbean-logo.1474c6b6.png" alt="" /></li> */}
                                    {/* <li><img src="https://i.imgur.com/aRRChFH.png" alt="" /></li> */}
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