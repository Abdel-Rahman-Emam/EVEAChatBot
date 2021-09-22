import React from 'react'
import Topbar from "../../components/topbar/Topbar.jsx"
import Sidebar from "../../components/sidebar/Sidebar.jsx"
import Rightbar from "../../components/rightbar/Rightbar.jsx"
import Feed from "../../components/feed/Feed.jsx"
import {useEffect, useState} from "react"
import axios from "axios"
import "./profile.css"
export default function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [user, setUser] = useState({})
    useEffect(() => {
    const fetchUser = async () => {
        const res = await axios.get(`/users?username=john`)
        setUser(res.data);
    };
    fetchUser();}
    ,[]);
    return (
        <>
            <Topbar/>
            <div className ="homeContainer">
                <Sidebar/>
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src={PF+(user.coverPicture || "person/noCover.png")} alt="" className="profileCoverImg" />
                            <img src={PF+(user.profilePicture || "person/noAvatar.png")} alt="" className="profileUserImg" />
                            </div>
                            <div className="profileInfo">
                                <h4 className="profileInfoName">{user.username}</h4>
                                <span className="profileInfoDesc">{user.desc}</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed username={user.username}/>
                        <Rightbar user={user}/>
                    </div>
                </div>
            </div>
        </>)
}
