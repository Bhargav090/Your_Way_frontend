import React from 'react'
import './card.css'

function Card({name, image, description}) {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-username">{name}</h3>
      </div>
      <div className="card-body">
        <img src={image} alt={name} className="card-image" />
      </div>
      <div className="card-footer">
        <h4 className="card-description">{description}</h4>
      </div>
    </div>
  )
}

export default Card