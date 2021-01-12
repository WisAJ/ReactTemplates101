import React, {useState, useEffect} from 'react';
import axios from "axios";

import {PortfolioSec, PortfolioTitle, LiItem, Ul, Span, Overlay, OverlaySpan, Box, BoxImg} from './style.js';


// This time we'll use Hooks, ie. no axios. with Hooks you can still use state with no class functions.

const Portfolio = () => {

    const  [Images, setImages] = useState([])

    useEffect ( () => { 
        axios.get('js/data.json').then( res => { setImages(res.data.portfolio)});
        
    }, [])

    const PortfolioImages = Images.map( imageItem => {
        // console.log(imageItem.image)
        return (
            <Box    key={imageItem.id}>
            <BoxImg src={imageItem.image} alt=""/>
            <Overlay>
                <OverlaySpan>
                    Show Image
                </OverlaySpan>
            </Overlay>
             </Box>

        )
    })

    return ( 
        
        <PortfolioSec>
        
        <PortfolioTitle><Span>My</Span> Portfolio</PortfolioTitle>
        <Ul>
            <LiItem active>All</LiItem>
            <LiItem>HTML</LiItem>
            <LiItem>Photoshop</LiItem>
            <LiItem>Wordpress</LiItem>
            <LiItem>Mobile</LiItem>
            
        </Ul>
        
        <div>
    
            {PortfolioImages}
         
    
        </div>
        
    </PortfolioSec>
      );
}

export default Portfolio;