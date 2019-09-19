import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (filterType) => {
    console.log(filterType)
    this.setState({
      filters: {...this.state.filters, type: filterType}
    })
  }

  onFindPetsClick = () => {
    const url = this.state.filters.type === 'all' ? "" : `?type=${this.state.filters.type}`
    fetch(`/api/pets${url}`)
    .then(resp => resp.json())
    .then(data => this.setState({pets: data}))
  }

  onAdoptPet = (petId) => {
    let mappedPets = this.state.pets.map(pet => {
      console.log(pet.id)
      console.log(petId)
      if (pet.id === petId){
        pet.isAdopted = true
      }
      return pet
    })
    // console.log(this.state.pets === mappedPets)
    // console.log({mappedPets})
    this.setState({
      pets: mappedPets
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType = {this.onChangeType} onFindPetsClick = {this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
