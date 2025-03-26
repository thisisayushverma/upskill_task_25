import './App.css'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/cartRedux'

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Outlet />
      </Provider>
    </>
  )
}

export default App
