import './App.css'
import Home from './components/Home'
import MyNavbar from './components/MyNavbar'

function App() {
  return (
    // this <> is called a React Fragment
    // basically is just a wrapper that will not output anything
    // this is handy for following the react component rule of ALWAYS
    // returning one single element
    <>
      <MyNavbar branding='Strivestaurant' />
      <Home />
    </>
  )
}

// <button className='btn btn-danger'>DANGER</button>
// the above way still works
// <Button variant='danger'>DANGER</Button>
// but this is more preferred, this way is more "speaking"
export default App
