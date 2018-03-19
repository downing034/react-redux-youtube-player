import React     from 'react'
import ReactDOM  from 'react-dom'
import Header    from './components/header'
import SearchBar from './components/search_bar'
import YTSearch  from 'youtube-api-search'
import 'bootstrap/dist/css/bootstrap.css'
const API_KEY = 'AIzaSyCplF32XSyQeCNNe5KfZRTk1oEee5bTNjU'

const App = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <Header />
        <div className="col-md-10 col-md-offset-1">
          <SearchBar />
        </div>
      </div>
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('app'))
