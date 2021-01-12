import React from 'react';
import { HomeSec , HomeInfo, HomeBtn, HomeDesc, HomeTitle, HomeInf, Span } from './style.js';

const Home = () => {
    return ( 
        <HomeSec>
         
        <div className="container">
            <HomeInfo>
                <HomeTitle>Wissam AJ</HomeTitle>
                <HomeInf>Creative Director</HomeInf>
                <HomeDesc>
                    Iam a professional <Span>Web Dev.</Span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                </HomeDesc>
                <HomeBtn>Let's Begin</HomeBtn>
            </HomeInfo>
        </div>
      
    </HomeSec>
       );
}
 
export default Home;