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

  onAdoptPet = id => {
    let newPetArray = this.state.pets.map(pet => {
      return pet.id === id ? { ...pet, isAdopted: true } : pet;
    });
    console.log(newPetArray);
    this.setState({
      pets: newPetArray
    });
  };

  /// Change the filter::
  onChangeType = e => {
    console.log("onchangetype target:", e.target.value);
    this.setState({
      pets: [],
      filters: {
        type: e.target.value
      }
    });
  };
  // Fetching :::
  onFindPetsClick = () => {
    if (this.state.filters.type === "all") {
      return fetch("/api/pets").then(response => {
        response.json().then(data => {
          this.setState({
            pets: data
          });

          console.log(this.state);
        });
      });
    } else if (this.state.filters.type === "cat") {
      return fetch("/api/pets?type=cat").then(response => {
        response.json().then(data => {
          this.setState({
            pets: data
          });
          console.log(this.state);
        });
      });
    } else if (this.state.filters.type === "dog") {
      return fetch("/api/pets?type=dog").then(response => {
        response.json().then(data => {
          this.setState({
            pets: data
          });
          console.log(this.state);
        });
      });
    } else if (this.state.filters.type === "micropig") {
      return fetch("/api/pets?type=micropig").then(response => {
        response.json().then(data => {
          this.setState({
            pets: data
          });
          console.log(this.state);
        });
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
                onFindPetsClick={this.onFindPetsClick}
                onChangeType={this.onChangeType}
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
