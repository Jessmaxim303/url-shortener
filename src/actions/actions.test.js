import * as actions from '../actions'

describe('actions', () => {

  it('should have a type SET_URLS', () => {
    const urls = [{
      id: 1,
      long_url: "https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
      short_url: "http://localhost:3001/useshorturl/2",
      title: 'Awesome photo'
    }]
    const expectedAction = {
      type: 'SET_URLS',
      urls
    }
    const result = actions.setUrls(urls)
    expect(result).toEqual(expectedAction)
  })

})