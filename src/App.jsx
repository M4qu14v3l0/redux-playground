import './styles.css'

import { Provider } from 'react-redux'

import Navbar from './components/Navbar'
import UserList from './components/UserList'

import store from './store'


function App() {

  return (
    <div className="App">
      <>
      <Provider store={store}>
        <Navbar />
        <UserList />
      </Provider>
      </>
    </div>
  )
}
// comme
export default App
