import React from 'react'

class NewSpice extends React.Component {
  state = {
    title: "",
    image: "",
    notes: "",
    description: "",
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addNewSpice(this.state)
    console.log("submitting...")
  }

  handleChange = e => {
    e.persist();
    this.setState(prevState => ({
      [e.target.name]: e.target.value,
    }))
  }

  render() {
    return (
      <div className="card">
        <h2>New Spice</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Title: </label>
          <input onChange={this.handleChange} type="text" name="title" />
          <label htmlFor="image">Image URL: </label>
          <input onChange={this.handleChange} type="text" name="image" />
          <label htmlFor="notes">Tasting Notes: </label>
          <input onChange={this.handleChange} type="text" name="notes" />
          <label htmlFor="notes">Description: </label>
          <textarea onChange={this.handleChange} type="text" name="description" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default NewSpice