import "./sidebar.css"
import React from 'react'
import {RssFeed, PlayCircleFilled, Chat, Group, Bookmark, Help, Event, School, ExpandMore} from "@material-ui/icons"
export default function sidebar() {
    return (
            <div className="sidebar">
                <div className="sideBar">
                <div className="sideBarWrapper">
                <ul className="sideBarList">
                    <li className="sideBarListItem">
                        <RssFeed className="sideBarIcon"/>
                        <span className="sideBarListItemText">
                            Feed
                        </span>
                    </li>
                    <li className="sideBarListItem">
                        <PlayCircleFilled className="sideBarIcon"/>
                        <span className="sideBarListItemText">
                            Videos
                        </span>
                    </li>
                    <li className="sideBarListItem">
                        <Chat className="sideBarIcon"/>
                        <span className="sideBarListItemText">
                            Chats
                        </span>
                    </li>
                    <li className="sideBarListItem">
                        <Group className="sideBarIcon"/>
                        <span className="sideBarListItemText">
                            Groups
                        </span>
                    </li>
                    <li className="sideBarListItem">
                        <Bookmark className="sideBarIcon"/>
                        <span className="sideBarListItemText">
                            Saved
                        </span>
                    </li>
                    <li className="sideBarListItem">
                        <Help className="sideBarIcon"/>
                        <span className="sideBarListItemText">
                            FAQ
                        </span>
                    </li>
                    <li className="sideBarListItem">
                        <Event className="sideBarIcon"/>
                        <span className="sideBarListItemText">
                            Events
                        </span>
                    </li>
                    <li className="sideBarListItem">
                        <School className="sideBarIcon"/>
                        <span className="sideBarListItemText">
                            Courses
                        </span>
                    </li>
                </ul>
                <button className="sideBarButton"><ExpandMore className="expand"/>Show More</button>
                <hr className="sideBarHr"/>
            </div>
        </div>
        </div>
    )
}
