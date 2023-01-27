import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { logo } from './assets';
import { CreateButton, LanguageSelector } from './components';
import { Home, CreatePost } from './pages';
import { Provider } from 'react-redux';
import { store } from './store/store';

export const App = () => {

  return (

    <Provider store={store}>

      <BrowserRouter>
      
        <header className='w-full flex justify-between items-center bg-black sm:px-8 px-4 py-4 '>

          <Link to="/">
            <img src={logo} alt="logo" className='w-28 object-contain' />
          </Link>

          <div className='flex gap-10'>

          <CreateButton />

          <LanguageSelector />

          </div>

        </header>

        <main className='sm:p8 px-4 py-8 w-full bg-black min-h-[calc(100vh-72px)]'>

          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/create-post" element={<CreatePost />} />

          </Routes>



        </main>
      
      </BrowserRouter>

    </Provider>
  )
}

export default App
