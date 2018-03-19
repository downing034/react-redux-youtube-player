import React from 'react'

const SearchBar = () => {
  return (
    <form>
      <div className="form-group row">
        <label htmlFor="search-field" className="col-sm-2 col-form-label">Youtube Search:</label>
        <div class="col-sm-10">
          <input type="text" className="form-control" id="search-field" placeholder="Enter search term"/>
        </div>
      </div>
    </form>
  )
}

export default SearchBar
