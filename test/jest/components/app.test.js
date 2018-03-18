import React       from 'react'
import { shallow } from 'enzyme'
import App         from 'components/app'

describe('App', () => {
  it('should render', () =>{
    let wrapper = shallow(<App/>)
    expect(wrapper).toHaveText('React Boiler Plate Template')
  })
})
