import React from 'react'
import '../styles/VideoCard.css'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';

const VideoCard = ({ channelName, channelLogo, thumbnail, videoTitle, length, views, uploadAt }) => {
    return (
        <>
            <div className="vide-card">
                <div className="thumbnail">
                    <div className="hover-action">
                        <button>
                            <MenuOpenIcon />
                        </button>
                        <button>
                            <AccessTimeIcon />
                        </button>
                    </div>
                    <img src={thumbnail} alt="" className="thubnail-img" />
                    <div className="time">
                        <p>{length}</p>
                    </div>
                </div>
                <div className="video-card-footer">
                    <img src={channelLogo} className="channel-icon" alt="" />
                    <div className="video-destails">
                        <p className="video-title">{videoTitle}</p>
                        <p className="channel-name">{channelName}</p>
                        <div className="views-time">
                            <p className="views">* {views}</p>
                            <p className="time">* {uploadAt}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VideoCard