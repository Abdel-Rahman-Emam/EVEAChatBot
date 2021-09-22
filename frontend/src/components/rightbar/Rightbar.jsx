import "./rightbar.css"

import {Users} from "../../DummyData"
import Online from "../online/Online"


export default function Rightbar({user}){
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const HomeRightbar = () =>{
        return(
        <>
        <div className="birthdayContainer">
                    <img src="assets/gift.png" alt="" className="birthdayImg" />
                    <span className="birthdayText"><b>Ahmed</b> and <b> 3 others</b> have birthdays</span>
                </div>
                <img src="assets/ad.png" alt="" className="rightbarAd"/>
                <div className="rightbarTotal">
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map(u=>(
                        <Online key= {u.id} user={u}/>
                    ))}
                </ul>
                </div>
        </>)
    }

    const ProfileRightbar = () =>{
        return(
        <>
        <h4 className="rightbarTitle">User Information</h4>
            <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">City:</span>
                    <span className="rightbarInfoValue">{user.City}</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Relationship Status:</span>
                    <span className="rightbarInfoValue">{user.Relationship === 1? "Single":user.Relationship === 2? "Married": "It's Complicated"}</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Place of Birth:</span>
                    <span className="rightbarInfoValue">{user.from}</span>
                </div>
            </div>
            <h4 className="rightbarTitle">User Friends</h4>
            <div className="rightbarFollowing">
            <div className="rightbarFollowings">
                <img src={`${PF}person/5.jpeg`} alt="" className="rightbarFollowingImg" />
                <span className="rightbarFollowingName">Khaled Hamra</span>
            </div>
            <div className="rightbarFollowings">
                <img src={`${PF}person/6.jpeg`} alt="" className="rightbarFollowingImg" />
                <span className="rightbarFollowingName">Batta Safra</span>
            </div>
            <div className="rightbarFollowings">
                <img src={`${PF}person/7.jpeg`} alt="" className="rightbarFollowingImg" />
                <span className="rightbarFollowingName">Mido Khedr</span>
            </div>
            <div className="rightbarFollowings">
                <img src={`${PF}person/8.jpeg`} alt="" className="rightbarFollowingImg" />
                <span className="rightbarFollowingName">Magnus Ahmed</span>
            </div>
            <div className="rightbarFollowings">
                <img src={`${PF}person/9.jpeg`} alt="" className="rightbarFollowingImg" />
                <span className="rightbarFollowingName">Amr ElDib</span>
            </div>
            <div className="rightbarFollowings">
                <img src={`${PF}person/10.jpeg`} alt="" className="rightbarFollowingImg" />
                <span className="rightbarFollowingName">Hazem Ahmed</span>
            </div>
            </div>
        </>
        )

    }
    return(
        <div className="rightbar">
            <div className="rightbarWrapper">
                {user? <ProfileRightbar/>: <HomeRightbar/>}
            </div>
        </div>
    )
}