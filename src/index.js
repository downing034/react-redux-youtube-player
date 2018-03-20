import _                    from 'lodash'
import React, { Component } from 'react'
import ReactDOM             from 'react-dom'
import Header               from './components/header'
import SearchBar            from './components/search_bar'
import VideoList            from './components/video_list'
import VideoDetail          from './components/video_detail'
import YTSearch             from 'youtube-api-search'
import 'bootstrap/dist/css/bootstrap.css'
import '../style/style.css'
const API_KEY = 'AIzaSyCplF32XSyQeCNNe5KfZRTk1oEee5bTNjU'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null
    }
    this.videoSearch('NCAA March Madness')
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    })
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300)

    return (
      <div className="container-fluid">
        <div className="row">
          <Header />
          <div className="col-md-10 col-md-offset-1">
            <SearchBar onSearchTermChange={videoSearch}/>
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList
              videos={this.state.videos}
              onVideoSelect={selectedVideo => this.setState({selectedVideo})}
            />
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
