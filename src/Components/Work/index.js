import React, {Component} from 'react';
import axios from 'axios';
import {WorkPart, WorkTitle, WorkSec, Line, Icon, PartDesc, PartTitle, Span} from './style.js';


class Work extends Component {
  
    state= {
        works:[]
    }

    componentDidMount () {
        axios.get('js/data.json').then( res => {
            this.setState({works:res.data.works})
            // console.log(res.data.works)
        })
    }

render() {

    const {works} = this.state
    const worksList = works.map( work => {
        // console.log(work.id)
        return (
            <WorkPart first={work.id} key={work.id}>
                    <Icon className={work.icon_name}></Icon>
                    <PartTitle>{work.title}</PartTitle>
                    <Line/>
                    <PartDesc>
                    {work.body}
                    </PartDesc>
                </WorkPart>
        )
    }

    )

    return ( 

        <WorkSec>
            <div className="container">

                <WorkTitle><Span>My</Span> Work</WorkTitle>
              {worksList}
                
            </div>
        </WorkSec>
       );
}

}

 
export default Work;