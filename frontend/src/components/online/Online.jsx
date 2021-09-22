import React from 'react'
import {Check} from "@material-ui/icons"
import "./online.css"
export default function Online({user}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
    <li className="rightBarFriend">
        <div className="rightBarProfileImgContainer">
            <img src={PF + user.profilePicture} alt="" className="rightBarProfileImg" />
            <span className="rightBarOnline"><Check className="onlineCheck"/></span>
        </div>
        <span className="rightBarUsername">{user.username}</span>
    </li>
    )
}
