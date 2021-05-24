import React from 'react'
import VideoCard from './VideoCard'
import '../styles/VideoList.css'
import data from '../data'

const VideoList = () => {
	return (
		<>

			<div className="videos-list">
				{
					data.map((e) => {
						return (
							<VideoCard channelName={e.channelName} channelLogo={e.channelLogo} thumbnail={e.thumbnail} videoTitle={e.videoTitle} length={e.length} views={e.views} uploadAt={e.uploadAt} />
						)
					})
				}
			</div>
		</>
	)
}

export default VideoList