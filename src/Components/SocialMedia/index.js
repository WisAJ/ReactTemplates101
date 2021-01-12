import React, {useState, useEffect} from 'react';
import axios from "axios";

import { SocialMedia ,Social, SpanDesc, SpanInfo, Span, Icon } from './style.js';

const SocMedia = () => {

    const  [Info, setInfo] = useState([])

    useEffect ( () => { 
        axios.get('js/data.json').then( res => { setInfo(res.data.social)});
        
    }, [])

    const SocialInfo = Info.map( Infoitem => {
        // console.log(Infoitem.id)
        return (
         
        <Social item = {Infoitem.id} key={Infoitem.id}>
            <Icon   className= {Infoitem.icon}></Icon>
            <SpanDesc>
                <Span>{Infoitem.title}</Span>
                <SpanInfo>{Infoitem.body}</SpanInfo>
            </SpanDesc>
        </Social>
    

    )
})



    return ( 
        <SocialMedia>

            {SocialInfo}
   
        </SocialMedia>
       );
}
 
export default SocMedia;