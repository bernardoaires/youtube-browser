import './VideoItem.css'
import React from 'react'

interface VideoItemProps {
  video: any
  onVideoSelect: (video: any) => void
}

export const VideoItem: React.FC<VideoItemProps> = (props) => {
  const { video, onVideoSelect } = props

  return (
    <div className="item video-item" onClick={() => onVideoSelect(video)}>
      <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}/>
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  )
}