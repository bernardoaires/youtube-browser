import React, { useState } from 'react'
import youtube from '../api/youtube'
import { SearchBar } from './SearchBar'
import { VideoList } from './VideoList'
import { VideoDetail } from './VideoDetail'

const KEY = 'AIzaSyBWQvd_fSm6xBhvgNHanjsSaOvXH51T16E'

export const App: React.FC = () => {
  const [videos, setVideos] = useState<Object[]>([])
  const [selectedVideo, setSelectedVideo] = useState(null)

  const onTermSubmit = async (term: string) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
        part: "snippet",
        maxResult: 5,
        type: 'video',
        key: KEY
      }
    })
    console.log(response.data.items)
    setVideos(response.data.items)
    setSelectedVideo(response.data.items[0])
  }

  const onVideoSelect = (video: any) => {
    setSelectedVideo(video)
  }

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={onTermSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={onVideoSelect} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  )
}