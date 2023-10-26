import { useState } from 'react'

export default function ActivityPreview() {

  return (
    <div className='activityPreview'>
        <h2>{activity.activity}</h2>
        <div>
          <p>{activity.category}</p>
          <p>{activity.duration}</p>
          <a href={activity.link}>link</a>
        </div>
        <p>{activity.description}</p>
    </div>
  )
}
