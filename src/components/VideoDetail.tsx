import React from 'react'

interface VideoDetailProps {
  video: any
}

export const VideoDetail: React.FC<VideoDetailProps> = (props) => {
  const { video } = props

  if (!video) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <div className="ui embed">
        <iframe src={`https://www.youtube.com/embed/${video.id.videoId}`} title="Video Player"/>
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  )
}