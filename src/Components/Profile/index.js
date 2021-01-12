import React, {useState, useEffect} from 'react';
import axios from "axios";
import "./style.css"


const Profile = () => {

    const  [Info, setInfo] = useState([])

    useEffect ( () => { 
        axios.get('js/data.json').then( res => { setInfo(res.data.profile)});
        
    }, [])

    const ProfileInfo = Info.map( infoItem => {
        // console.log(infoItem)
        return (

            <div className="container" key={infoItem.id}>
            <div className="profile">
                <h2 className="profile-title"><span>My </span>Profile</h2>
                <ul className="profile-list">
                    <li className="profile-item">
                        <span>Name</span>
                        {infoItem.name}
                    </li>
                    <li className="profile-item">
                        <span>Birthday</span>
                        {infoItem.birthday}
                    </li>
                    <li className="profile-item">
                        <span>Address</span>
                        {infoItem.address}
                    </li>
                    <li className="profile-item">
                        <span>Phone</span>
                        {infoItem.phone}
                    </li>
                    <li className="profile-item">
                        <span>Email</span>
                        {infoItem.email}
                    </li>
                    <li className="profile-item">
                        <span>Website</span>
                        <span className="web"> {infoItem.website}</span>
                    </li>
                </ul>
            </div>
            
            <div className="skills">
                <h2 className="skills-title">Some <span>skills</span></h2>
                <p className="skills-desc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                </p>
                <div className="bar">
                    <span className="title">JavaScript</span>
                    <span className="perc"> {infoItem.js}</span>
                    <div className="parent">
                        <span className="sp1"></span>
                    </div>
                </div>
                
                <div className="bar">
                    <span className="title">CSS3</span>
                    <span className="perc"> {infoItem.css}</span>
                    <div className="parent">
                        <span className="sp2"></span>
                    </div>
                </div>
                
                <div className="bar">
                    <span className="title">HTML</span>
                    <span className="perc"> {infoItem.html}</span>
                    <div className="parent">
                        <span className="sp3"></span>
                    </div>
                </div>
            </div>
            
        </div>


           


        )
    })


return (
    <div className="profile_skills">
       {ProfileInfo}
    </div>

    )
}
export default Profile;