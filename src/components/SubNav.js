import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class SubNav extends Component {
 
    
    render(){
        return(
            <div className="body clearfix">
                <div className="subnav">
                    <a className="subnav-item" href="/projects/1">Groundwork</a>
                    <a className="subnav-item" href="/projects/2">Offkilter Ceramics</a>
                    <a className="subnav-item" href="/projects/3">Babyganics</a>
                    <a className="subnav-item" href="/projects/4">NYBG Impressify</a>
                    <a className="subnav-item" href="/projects/5">FUR</a>
                    <a className="subnav-item" href="/projects/6">Max Weinman</a>
                    <a className="subnav-item" href="/projects/7">Madway Holiday Gift</a>
                    <a className="subnav-item" href="/projects/8">Artlook</a>
                    <a className="subnav-item" href="/projects/9">NYBG Frida Kahlo</a>
                    <a className="subnav-item" href="/projects/10">Thingmade</a>
                </div>
            </div>   
        )    
}

}
export default SubNav;