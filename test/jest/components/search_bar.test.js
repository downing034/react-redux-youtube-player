import React       from 'react'
import { shallow } from 'enzyme'
import SearchBar   from 'components/search_bar'


describe('SearchBar', () => {

    const props = {
      onSearchTermChange: jest.fn()
    }

  it('should render with props', () =>{
    const wrapper = shallow(<SearchBar {...props } />)
    expect(wrapper).toHaveTagName('form')

    const formGroupDiv = wrapper.childAt(0)
    expect(formGroupDiv).toHaveTagName('div')
    expect(formGroupDiv).toHaveClassName('form-group row')

    const label = wrapper.find('label')
    expect(label).toHaveProp('htmlFor', 'search-field')
    expect(label).toHaveClassName('col-sm-2 col-form-label')
    expect(label).toHaveText('Youtube Search:')

    const inputWrapperDiv = formGroupDiv.childAt(1)
    expect(inputWrapperDiv).toHaveTagName('div')

    const input = wrapper.find('input')
    expect(input).toHaveProp('type', 'text')
    expect(input).toHaveClassName('form-control')
    expect(input).toHaveProp('id', 'search-field')
    expect(input).toHaveProp('placeholder', 'Enter search term')
    expect(input).toHaveProp('onChange')
    expect(input).toHaveValue('')
  })

  it('should trigger callback onSearchTermChange', () =>{
    const wrapper = shallow(<SearchBar {...props } />)
    expect(wrapper).toHaveState({ term: '' })

    const input = wrapper.find('input')
    input.value = 'foobar'
    input.simulate('change', { target: input })
    expect(props.onSearchTermChange).toHaveBeenCalledTimes(1)
    expect(props.onSearchTermChange).toBeCalledWith('foobar')
    expect(wrapper).toHaveState({ term: 'foobar' })
  })
})
