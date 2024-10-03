import React from 'react'

export default function Badge({text}) {
  return (
    <span className='border border-solid inline-block border-white py-1 px-2 rounded-3xl '>{text}</span>
  )
}
