import React from 'react'
import Icon1 from '../../Images/Exp.svg';
import {ProjectsContainer, ProjectsH1, ProjectsWrapper, ProjectsCard, ProjectsIcon, ProjectsH2, ProjectsP} from './ProjectElements';

const Projects = () => {
    return (
        <ProjectsContainer id='Projects'>
            <ProjectsH1>My Projects</ProjectsH1>
            <ProjectsWrapper>
                <ProjectsCard>
                    <ProjectsIcon src={Icon1}/>
                    <ProjectsH2>Project 1</ProjectsH2>
                    <ProjectsP>Desc</ProjectsP>
                </ProjectsCard>
                <ProjectsCard>
                    <ProjectsIcon src={Icon1}/>
                    <ProjectsH2>Project 1</ProjectsH2>
                    <ProjectsP>Desc</ProjectsP>
                </ProjectsCard>
                <ProjectsCard>
                    <ProjectsIcon src={Icon1}/>
                    <ProjectsH2>Project 1</ProjectsH2>
                    <ProjectsP>Desc</ProjectsP>
                </ProjectsCard>
            </ProjectsWrapper>
        </ProjectsContainer>
    )
}

export default Projects
