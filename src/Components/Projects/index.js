import React from 'react'
import Icon1 from '../../Images/Social.svg';
import {ProjectsContainer, ProjectsH1, ProjectsWrapper, ProjectsCard, ProjectsIcon, ProjectsH2, ProjectsP} from './ProjectElements';

const Projects = () => {
    return (
        <ProjectsContainer id='Projects'>
            <ProjectsH1>My Projects</ProjectsH1>
            <ProjectsWrapper>
                    <ProjectsCard href="//barney.gonzaga.edu/~avaldez/login.php">
                        <ProjectsIcon src={Icon1}/>
                        <ProjectsH2>Social Media WebApp</ProjectsH2>
                        <ProjectsP>A simple web app that mimics the functionality of a social media app. All data stored in a MySQL database</ProjectsP>
                    </ProjectsCard>
                <ProjectsCard href="//github.com/ArmandoV15/TutorMe">
                    <ProjectsIcon src={Icon1}/>
                    <ProjectsH2>Tutor Me</ProjectsH2>
                    <ProjectsP>Simple Android Application that allows users to tutor or find a tutor for a specific subject. Google fire base used for Authentication and simple chat feature.
                    </ProjectsP>
                </ProjectsCard>
                <ProjectsCard href="//github.com/ArmandoV15/Breakout">
                    <ProjectsIcon src={Icon1}/>
                    <ProjectsH2>Breakout</ProjectsH2>
                    <ProjectsP>Final Project for IOS App Dev Course. User is able to create an account and play a simple but fun version of breakout.</ProjectsP>
                </ProjectsCard>
            </ProjectsWrapper>
        </ProjectsContainer>
    )
}

export default Projects
