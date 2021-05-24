import React from 'react'
import '../styles/VideoContainer.css'
import Category from './Category'
import VideoList from './VideoList'

const VideoContainer = () => {
    return (
        <>
            <div className="videoes-container">
                <Category />
                <VideoList />
            </div>
        </>
    )
}

export default VideoContainer