import React from 'react'
import Cards from './Cards'

class FunPeople extends React.Component {
  
  state = {
    cards: [
      {
        name: 'Syd',
        reason: 'she likes to watch movies',
        id: 1
      },
      {
        name: 'Alicia',
        reason: 'she likes to dance',
        id: 2
      },
      {
        name: 'Derrick',
        reason: 'he likes to create stuff',
        id: 3
      },
    ]
  }

  handleRemoveCard = (id) => {
    this.setState( prevState => {
      return {
        cards: prevState.cards.filter( p => p.id !== id )
      }
    })
    console.log(this.state)
  } 

  handleAddCard = () => {
    const nameInput = document.getElementById("nameInput")
    const reasonInput = document.getElementById("reasonInput")
    

    const newCard = 
      {
        name: nameInput.value,
        reason: reasonInput.value,
        id: this.state.cards.length + 1
      }
    
      this.setState( prevState => {
        prevState.cards.push(newCard)
        return {
          cards: prevState.cards
        }
      })
    
    console.log(newCard)
  }

  render () {
    return (
      <section className="content">
        <h1 className="title">List of Fun People</h1>
        <div className="box">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input type="text" id="nameInput" className="input is-medium" defaultValue="" />
              </div>
            </div>
            <div className="field">
              <label className="label">Reason they are fun</label>
              <div className="control">
                <input type="text" id="reasonInput" className="input is-medium" defaultValue="" />
              </div>
            </div>
            <div className="field">
              <input type="submit button" className="button is-link is-medium is-disabled" disabled="" defaultValue="Add Fun Person" onClick={this.handleAddCard}/>
            </div>
          </form>
        </div>
        <div className="columns">
          {this.state.cards.map( card => 
            <Cards 
              name={card.name} 
              reason={card.reason} 
              id={card.id}
              key={card.id.toString()} 
              removeCard={this.handleRemoveCard}
            />
          )}
        </div>
      </section>
    )
  }
}
//<Cards name={this.state.name} reason={this.state.reason}/>

export default FunPeople