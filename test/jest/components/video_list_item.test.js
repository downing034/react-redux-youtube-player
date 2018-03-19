import React         from 'react'
import { shallow }   from 'enzyme'
import VideoListItem from 'components/video_list_item'
import { Video }     from '../factories/video_factory'

describe('VideoListItem', () => {
  const props = {
    video: Video.build(),
    onVideoClick: jest.fn()
  }

  it('should render video content when video object exists', () =>{
    const wrapper = shallow(<VideoListItem {...props } />)
    expect(wrapper).toHaveTagName('li')
    expect(wrapper).toHaveClassName('list-group-item')
    expect(wrapper).toHaveProp('onClick')

    const videoListDiv = wrapper.childAt(0)
    expect(videoListDiv).toHaveTagName('div')
    expect(videoListDiv).toHaveClassName('video-list media')

    const mediaLeftDiv = videoListDiv.childAt(0)
    expect(mediaLeftDiv).toHaveTagName('div')

    const image = wrapper.find('img')
    expect(image).toHaveProp('src', props.video.snippet.thumbnails.default.url)

    const mediaBodyDiv = videoListDiv.childAt(1)
    expect(mediaBodyDiv).toHaveTagName('div')

    const videoTitleDiv = mediaBodyDiv.childAt(0)
    expect(videoTitleDiv).toHaveText(props.video.snippet.title)
  })

  it('should trigger onVideoClick callback', () =>{
    const wrapper = shallow(<VideoListItem {...props } />)
    wrapper.simulate('click')
    expect(props.onVideoClick).toHaveBeenCalledTimes(1)
    expect(props.onVideoClick).toHaveBeenCalledWith(props.video)
  })
})
