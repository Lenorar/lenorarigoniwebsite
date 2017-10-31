
import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class About extends Component {
    render(){
        const img = require('../images/githubicon.svg');
        return(
            <div className="body projects-homepage clearfix">
                <div className="project">                     
                    <a target="_blank" href="https://blooming-escarpment-41504.herokuapp.com/">
                      <div className="project-item">
                        <h2>Photography Collection</h2>
                        <p className="description">Full CRUD application where users can collect and discover photographer’s work.</p>
                        <img className="profile" src="https://res.cloudinary.com/doez5fa8j/image/upload/v1509493441/photography-collection_dqnfl1.png" />
                        <h3>React, Ruby on Rails, PostgeSQL, database creation, CSS, Javascript</h3>
                        <a target="_blank" href="https://github.com/Lenorar/photography-collection-back-end"><img className="github" src={img}/> </a> 
                    </div>
                    </a>
                </div>
                <div className="project">                     
                    <a target="_blank" href="http://www.maxweinman.com/">
                      <div className="project-item">
                        <h2>Max Weinman Portfolio</h2>
                        <p className="description">Bespoke website showcasing Max Weinman's films and photography.</p>
                        <img className="profile" src="https://res.cloudinary.com/doez5fa8j/image/upload/v1509493448/max-weinman-portfolio_vemgd1.png" />
                        <h3>HTML, Javascript, CSS</h3>
                        <a target="_blank" href="https://github.com/Lenorar/MaxWeinmanFilm"><img className="github" src={img}/> </a> 
                    </div>
                    </a>
                </div>

                <div className="project">                     
                    <a target="_blank" href="https://afternoon-fortress-39799.herokuapp.com/">
                      <div className="project-item">
                        <h2>User Dictionary</h2>
                        <p className="description">Full CRUD application for users to lookup words and store for memorization purposes.</p>
                        <img className="profile" src="https://res.cloudinary.com/doez5fa8j/image/upload/v1509493455/user-dictionary_w4jdsq.png" />
                        <h3>Node.js, Express, Javascript, CSS, Sketch, User Auth</h3>
                        <a target="_blank" href="https://github.com/Lenorar/user-dictionary-website  "><img className="github" src={img}/> </a> 

                    </div>
                    </a>
                </div>

                <div className="project">                     
                    <a target="_blank" href="https://git.generalassemb.ly/pages/lenorarigoni/hue-select-game/">
                      <div className="project-item">
                        <h2>Hue Select</h2>
                        <p className="description">Time based game for users to test their hexadecimal matching ability.</p>
                        <img className="profile" src="https://res.cloudinary.com/doez5fa8j/image/upload/v1509493459/hue-select_g6qpll.png" />
                        <h3>HTML, Javascript, CSS</h3>
                        <a target="_blank" href="https://github.com/Lenorar/hue-select-game"><img className="github" src={img}/> </a> 
                    </div>
                    </a>
                </div>

                <div className="project">                     
                    <a target="_blank" href="http://offkilterceramics.com/">
                      <div  className="project-item">
                        <h2>Offkilter Ceramic</h2>
                        <p className="description">Personal website for my ceramics studio, based in brooklyn.</p>
                        <img className="profile" src="https://res.cloudinary.com/doez5fa8j/image/upload/v1509493461/offkilter-ceramics_px0dcr.png" />
                        <h3>HTML, Javascript, CSS</h3>
                        {/* <a target="_blank" href="#"><img className="github" src={img}/></a>  */}
                    </div>
                    </a>
                </div>

                <div className="project">                     
                    <a target="_blank" href="https://infinite-eyrie-11286.herokuapp.com/">
                      <div className="project-item">
                        <h2>Medi-flash</h2>
                        <p className="description">Full CRUD application for medical students to create flashcards, made through Merriam-Webster Medical Dictionary API or their own definitions, to better study. </p>
                        <img  className="profile" src="https://res.cloudinary.com/doez5fa8j/image/upload/v1509493465/medi-flash_sz7kyi.png" />
                        <h3>React, Node.js, Express, Javascript, CSS</h3>
                        <a target="_blank" href="https://github.com/Dichora2"><img className="github" src={img}/></a> 
                    </div>
                    </a>
                </div>
            </div>
        )
      }
    }

  export default About;

