import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyCiqaVJOLd323SGsbxQPqQ_dyw-ApBRa6M'


// Create a new component. This component should produce
// some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
}

// Take this component's generated HTML and put it
// on the page (in the DOM)
//  jsx tags automatically makes an instance of the component
ReactDOM.render(<App />, document.querySelector('.container'))
