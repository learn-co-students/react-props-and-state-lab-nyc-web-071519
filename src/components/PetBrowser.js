import React from "react";

import Pet from "./Pet";

class PetBrowser extends React.Component {
  render() {
    // console.log(this.props)
    let animal = this.props.pets.map(pet => {
      return <Pet key={pet.id} pet={pet} onAdoptPet={this.props.onAdoptPet} />;
    });
    return (
      <div className="ui cards"> PET COMPONENT SHOULD GO HERE {animal} </div>
    );
  }
}

export default PetBrowser;
