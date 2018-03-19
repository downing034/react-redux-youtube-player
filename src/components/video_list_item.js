import React     from 'react'
import PropTypes from 'prop-types'

const VideoListItem = ({video, onVideoClick}) => {

  const imageUrl = video.snippet.thumbnails.default.url
  const videoTitle = video.snippet.title

  return (
    <li onClick={() => onVideoClick(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={ imageUrl }/>
        </div>
        <div className="media-body">
          <div className="media-heading">{ videoTitle }</div>
        </div>
      </div>
    </li>
  )
}

VideoListItem.display_name = 'VideoListItem'

VideoListItem.propTypes = {
  video: PropTypes.object.isRequired,
  onVideoSelect: PropTypes.func
}

export default VideoListItem
