import React       from 'react'
import { shallow } from 'enzyme'
import VideoDetail from 'components/video_detail'
import { Video }   from '../factories/video_factory'

describe('VideoDetail', () => {
  it('should render video content when video object exists', () =>{
    const props = { video: Video.build() }

    const wrapper = shallow(<VideoDetail {...props } />)
    expect(wrapper).toHaveTagName('div')
    expect(wrapper).toHaveClassName('video-detail col-md-8')

    const responsiveDiv = wrapper.childAt(0)
    expect(responsiveDiv).toHaveTagName('div')
    expect(responsiveDiv).toHaveClassName('embed-responsive embed-responsive-16by9')

    const iframe = wrapper.find('iframe')
    expect(iframe).toHaveClassName('embed-responsive-item')
    expect(iframe).toHaveProp('src', `https://www.youtube.com/embed/${props.video.id.videoId}`)

    const detailsDiv = wrapper.childAt(1)
    expect(detailsDiv).toHaveTagName('div')
    expect(detailsDiv).toHaveClassName('details')

    const titleDiv = detailsDiv.childAt(0)
    expect(titleDiv).toHaveTagName('div')
    expect(titleDiv).toHaveText(props.video.snippet.title)

    const descriptionDiv = detailsDiv.childAt(1)
    expect(descriptionDiv).toHaveTagName('div')
    expect(descriptionDiv).toHaveText(props.video.snippet.description)
  })

  it('should render video content when video object exists', () =>{
    const wrapper = shallow(<VideoDetail />)
    expect(wrapper).toHaveTagName('div')
    expect(wrapper).toHaveText('Loading...')
  })
})
