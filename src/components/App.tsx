import React from 'react'
import youtube from '../api/youtube'
import { SearchBar } from './SearchBar'

const KEY = 'AIzaSyBWQvd_fSm6xBhvgNHanjsSaOvXH51T16E'

export const App: React.FC = () => {
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
  }

  return (
    <div className="ui container">
      <SearchBar />
    </div>
  )
}