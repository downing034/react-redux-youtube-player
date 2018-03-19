import React         from 'react'
import { shallow }   from 'enzyme'
import VideoList     from 'components/video_list'
import VidelListItem from 'components/video_list_item'
import { Video }     from '../factories/video_factory'

describe('VideoList', () => {
  const video1 = Video.build()
  const video2 = Video.build()

  const props = {
    videos: [video1, video2],
    onVideoSelect: jest.fn()
  }
  it('should render with props', () =>{
    const wrapper = shallow(<VideoList {...props } />)
    expect(wrapper).toHaveTagName('ul')
    expect(wrapper).toHaveClassName('col-md-4 list-group')
    expect(wrapper).toContainReact(
      <VidelListItem
        video={video1}
        onVideoClick={props.onVideoSelect}
      />
    )
    expect(wrapper).toContainReact(
      <VidelListItem
        video={video2}
        onVideoClick={props.onVideoSelect}
      />
    )
  })

})
