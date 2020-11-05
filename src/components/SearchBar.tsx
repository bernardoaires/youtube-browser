import React, { useState } from 'react'

interface SearchBarProps {
  onFormSubmit: (term: string) => void
}

export const SearchBar: React.FC<SearchBarProps> = props => {
  const [term, setTerm] = useState<string>('')

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value)
  }

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    props.onFormSubmit(term)
  }

  return (
    <div className="ui segment search-bar">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label>Search Video</label>
          <input type="text" value={term} onChange={onInputChange} />
        </div>
      </form>
    </div>
  )
}