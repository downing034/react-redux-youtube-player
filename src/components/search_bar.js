import React, { Component } from 'react'
import PropTypes            from 'prop-types'

export default class SearchBar extends Component {

  constructor(props) {
    super(props)
    this.state = { term: '' }
  }

  // form tag used just to properly apply the bootstrap form-control styling
  render() {
    return (
      <form>
        <div className="form-group row">
          <label htmlFor="search-field" className="col-sm-2 col-form-label">Youtube Search:</label>
          <div class="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="search-field"
              placeholder="Enter search term"
              onChange={ event => this.onInputChange(event.target.value) }
              value={ this.state.term }/>
          </div>
        </div>
      </form>
    )
  }

  onInputChange(term) {
    this.props.onSearchTermChange(term)
    this.setState({ term })
  }
}

SearchBar.display_name = 'SearchBar'

SearchBar.propTypes = {
  onSearchTermChange: PropTypes.func.isRequired
}
