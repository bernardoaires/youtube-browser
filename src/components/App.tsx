import React, { useEffect, useState } from 'react'
import { useVideos } from '../hooks/useVideos'
import { SearchBar } from './SearchBar'
import { VideoList } from './VideoList'
import { VideoDetail } from './VideoDetail'

export const App: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<any>(null)
  const [videos, search]: any = useVideos('youtube')

  useEffect(() => {
    setSelectedVideo(videos[0])
  }, [videos])

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  )
}