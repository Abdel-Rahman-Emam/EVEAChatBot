import React from 'react'
import "./share.css"
import { PermMedia, Label, Room, EmojiEmotions} from "@material-ui/icons"
export default function share() {
    return (
        <div>
            <div className="share">
            <div className="shareWrapper">
                    <div className="shareTop">
                        <img src="/assets/person/1.jpeg" className="shareProfileImg" alt="you"/>
                        <input placeholder="What's in your mind?" className="shareInput" />
                    </div>
                    <hr className="shareHr"/>
                    <div className="shareBottom">
                        <div className="shareOptions">
                            <div className="shareOption">
                                <Label htmlColor="Tomato" className="shareIcon"/>
                                <span className="shareOptionText">Tag</span>
                            </div>
                            <div className="shareOption">
                                <Room htmlColor="Blue" className="shareIcon"/>
                                <span className="shareOptionText">Location</span>
                            </div>
                            <div className="shareOption">
                                <EmojiEmotions htmlColor="Green" className="shareIcon"/>
                                <span className="shareOptionText">Feelings</span>
                            </div>
                            <div className="shareOption">
                                <PermMedia htmlColor="Orange" className="shareIcon"/>
                                <span className="shareOptionText">Photo or Video</span>
                            </div>
                        </div>
                        <button className="shareButton">Share</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
