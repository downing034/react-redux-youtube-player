import React       from 'react'
import { shallow } from 'enzyme'
import Header      from 'components/header'

describe('Header', () => {
  it('should render', () =>{
    let wrapper = shallow(<Header/>)
    expect(wrapper).toHaveText('React Redux Youtube Player')
    expect(wrapper).toHaveTagName('h1')
  })
})
