import React from 'react'
import {MoreVert} from "@material-ui/icons"
import {useEffect, useState} from "react";
import "./post.css"
import axios from "axios";
import {Link} from "react-router-dom"
import {format} from "timeago.js"
export default function Post({ post }) {
    //const user = Users.filter(u=>u.id===1)
    const [like,setLike] = useState(post.likes.length)
    const [isLiked,setIsLiked] = useState(false)
    const [user, setUser] = useState({})
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    useEffect(() => {
    const fetchUser = async () => {
        const res = await axios.get(`/users?userId=${post.userId}`)
        setUser(res.data);
    };
    fetchUser();}
    ,[post.userId]);

    const likeHandler=() =>{
        setLike(isLiked?like-1: like+1)
        setIsLiked(!isLiked)
    }

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to={`profile/${user.username}`}>
                            <img src={ PF+"person/noAvatar.png"} alt="" className="postProfileImg"/>
                        </Link>
                        <span className="postUsername">{user.username}</span>
                        <span className="postDate">{format(post.createdAt)}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img src={PF+post.img} alt="ok" className="postImg" />
                    
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src={`${PF}like.png`} alt="" className="likeIcon" onClick={likeHandler} />
                        <img src={`${PF}heart.png`} alt="" className="likeIcon" onClick={likeHandler} />
                        <span className="postLikeCounter">{like}</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post?.comment}</span>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
