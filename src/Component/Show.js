import React from 'react'

export default function Show( {url} ) {
  return (
    <div className='box'  >
      {url}
      <img src={url} />
    </div>
  )
}
