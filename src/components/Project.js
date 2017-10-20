import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import WebDevelopment from '../components/WebDevelopment.js'
import projectData from './project-data';


  class Project extends Component {
    imageMap(array){
        return array.map((image, index)=>{
            return (
                <div className="image-container">
                    <img className="gallery-image" src={image} />
                </div>
            )
        })
    }

    thisProject(){
        const projectId = Number(this.props.match.params.id);
        const projectInfo = projectData.find(project => project.id == projectId);
        return(
            <div className=" clearfix">
                <div className="project-container clearfix">
                    <div className="project-intro">
                        <div className="project-details">
                            <h1>{projectInfo.title}</h1>
                            <p>{projectInfo.year}</p>
                            <a href={projectInfo.link}><p>link</p></a>
                            <h3>{projectInfo.participation[0]}</h3>
                            <h3>{projectInfo.participation[1]}</h3>
                            <h3>{projectInfo.participation[2]}</h3>
                        </div>
                        <div className="project-summary">
                            <p>{projectInfo.description}</p>
                        </div>
                    </div>
                    <div className="project-content-container">
                        {this.imageMap(projectInfo.images)}
                    </div>
                </div>
            </div>
        )
    }
    
    render(){
        return(
            <div className="project-page-style">
                {this.thisProject()}
            </div>
        )
    }
}

export default Project;