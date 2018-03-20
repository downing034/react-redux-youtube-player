import React       from 'react'
import { shallow } from 'enzyme'
import Header      from 'components/header'

describe('Header', () => {
  it('should render header', () =>{
    const wrapper = shallow(<Header/>)
    expect(wrapper).toHaveTagName('div')
    expect(wrapper).toHaveClassName('jumbotron text-center')

    const heading = wrapper.find('h1')
    expect(heading).toHaveClassName('display-4')
    expect(heading).toHaveText('React Youtube Player')

    const paragraph = wrapper.find('p')
    expect(paragraph).toHaveClassName('lead')
    expect(paragraph).toHaveText("This is a simple Youtube video search tool built using React and Youtube's API.")
  })
})
