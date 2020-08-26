import React from 'react'
import SpiceItem from './SpiceItem'
import Filter from './Filter'

class SpiceList extends React.Component {
  state = {
    fourStarOnly: false,
    search: ""
  }

  renderSpices() {
    return this.props.spices
      .filter(spice => this.state.fourStarOnly ? spice.rating >= 4 : true)
      .filter(spice => spice.notes.toLowerCase().includes(this.state.search.toLowerCase()))
      .map(spice => (
        <SpiceItem key={spice.id} spice={spice} />
      ))
  }

  handleSearch = (e) => {
    e.persist();
    this.setState(prevState => ({
      search: e.target.value
    }))
  }

  handleFourStarOnly = (e) => {
    e.persist();
    this.setState(prevState => ({
      fourStarOnly: !prevState.fourStarOnly
    }))
  }

  render() {
    return (
      <section className="spice-list">
        <Filter 
        onSearch={this.handleSearch}
        search={this.state.search}
        onFourStarOnly={this.handleFourStarOnly}
        fourStarOnly={this.state.fourStarOnly} 
        />
        {this.renderSpices()}
      </section>
    )
  }
}

export default SpiceList