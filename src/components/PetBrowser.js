import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  

  render() {
    console.log(this.props.pets)
    const mappedPets = this.props.pets.map(pet => <Pet key = {pet.id} pet={pet} onAdoptPet={this.props.onAdoptPet}/>)
    return <div className="ui cards">{mappedPets}></div>
  }
}

export default PetBrowser
