import React from 'react'

const Cards = (props) => { 
  return (
    <div className="column is-4" >
      <div className="box content is-medium">
        <p>{props.name} is fun because {props.reason}.</p>
        <button className="button is-link" onClick={ () => props.removeCard( props.id ) }>Remove {props.name}</button>
      </div>
    </div>
  )
}

export default Cards

