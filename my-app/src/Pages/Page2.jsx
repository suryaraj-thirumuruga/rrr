import React from 'react'
import Page3 from './Page3'

export default function Page2(props) {
  return (
    <div>
      <h1>Page 2</h1>
        <Page3 user1={props.user}/>
    </div>
  )
}
