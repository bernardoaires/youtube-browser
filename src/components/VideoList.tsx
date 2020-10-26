import React from 'react'
import { VideoItem } from './VideoItem'

interface VideoListProps {
  videos: Array<Object>
  onVideoSelect: (video: any) => void
}

export const VideoList: React.FC<VideoListProps> = (props) => {
  const { videos, onVideoSelect } = props

  return (
    <div className="ui relaxed divided list">
      {videos.map((video: Object, index: number) => {
        return <VideoItem onVideoSelect={onVideoSelect} video={video} key={index}/>
      })}
    </div>
  )
}