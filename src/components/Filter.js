import React from 'react'

class Filter extends React.Component {

  render() {
    return (
      <div className="card">
        <h2>Filter Spices</h2>
        <div className="filters">
          <div>
            <label>Search: </label>
            <input
              type="text"
              placeholder="Search By Tasting Notes..."
              value={this.props.search}
              onChange={this.props.onSearch}
            />
          </div>
          <label>
            4 Star Only <input
              type="checkbox"
              value={this.props.fourStarOnly}
              onChange={this.props.onFourStarOnly}
            />
          </label>
        </div>
      </div>
    )
  }
}

export default Filter