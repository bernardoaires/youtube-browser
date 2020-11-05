import { useEffect, useState } from 'react'
import youtube from '../api/youtube'

const KEY = 'AIzaSyDUeAKTeaLojTavQo05xGV_lZuSNa-rktY'

export const useVideos = (defaultSearchTerm: string) => {
  const [videos, setVideos] = useState<Object[]>([])

  useEffect(() => {
    search(defaultSearchTerm)
  }, [defaultSearchTerm])

  const search = async (term: string) => {
    const { data } = await youtube.get('/search', {
      params: {
        q: term,
        part: "snippet",
        maxResult: 5,
        type: 'video',
        key: KEY
      }
    })
    setVideos(data.items)
  }

  return [videos, search]
}