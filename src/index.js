import React     from 'react'
import ReactDOM  from 'react-dom'
import Header    from './components/header'
import SearchBar from './components/search_bar'
import YTSearch  from 'youtube-api-search'
const API_KEY = 'AIzaSyCplF32XSyQeCNNe5KfZRTk1oEee5bTNjU'

const App = () => {
  return (
    <div>
      <Header />
      <div>
        <SearchBar />
      </div>
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('app'))
