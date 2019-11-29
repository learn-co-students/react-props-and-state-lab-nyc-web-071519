import React from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      filters: {
        type: "all"
      }
    };
  }

  onChangeType = ({ target: { value } }) => {
    console.log({ target: value });
    this.setState({ filters: { ...this.state.filters, type: value } });
  };

  onAdoptPet = petId => {
    console.log("click");
    let pets = this.state.pets.map(pet => {
      return pet.id === petId ? { ...pet, isAdopted: true } : pet;
    });
    this.setState({ pets });
  };

  onFindPetsClick = () => {
    if (this.state.filters.type === "all") {
      fetch("/api/pets")
        .then(resp => resp.json())
        .then(data => {
          // console.log(data)
          this.setState({ pets: data });
        });
    } else if (this.state.filters.type === "cat") {
      fetch("/api/pets?type=cat")
        .then(resp => resp.json())
        .then(data => {
          // console.log(data)
          this.setState({ pets: data });
        });
    } else if (this.state.filters.type === "dog") {
      fetch("/api/pets?type=dog")
        .then(resp => resp.json())
        .then(data => {
          // console.log(data)
          this.setState({ pets: data });
        });
    } else if (this.state.filters.type === "micropig") {
      fetch("/api/pets?type=micropig")
        .then(resp => resp.json())
        .then(data => {
          // console.log(data)
          this.setState({ pets: data });
        });
    }
  };

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                onChangeType={this.onChangeType}
                onFindPetsClick={this.onFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
