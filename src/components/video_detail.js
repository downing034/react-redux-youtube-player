import React     from 'react'
import PropTypes from 'prop-types'

const VideoDetail = ({video}) => {
  // prevent react from trying to load the video markup when a video has not yet
  // been returned from the api call
  if(!video) {
    return <div>Loading...</div>
  }

  const videoId = video.id.videoId
  const url = `https://www.youtube.com/embed/${videoId}`
  const videoTitle = video.snippet.title
  const videoDescription = video.snippet.description

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{videoTitle}</div>
        <div>{videoDescription}</div>
      </div>
    </div>
  )
}

VideoDetail.display_name = 'VideoDetail'

VideoDetail.propTypes = {
  video: PropTypes.object
}

export default VideoDetail
