import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import './card.css'

function Card({ name, image, description }) {
  return (
    <div className="card">
      <div className="card-header">
        <FontAwesomeIcon icon={faUser} className="user-icon" />
        <h3 className="card-username">Posted By : {name}</h3>
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
