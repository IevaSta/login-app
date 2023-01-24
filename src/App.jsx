import { lazy, Suspense, useReducer } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.scss';
import DataContext from './Components/DataContext';
import data_reducer from './Reducers/dataReducer';


const Registration = lazy(() => import('./Components/RegistrationForm'));
const LoginForm = lazy(() => import('./Components/LoginForm'));

function App() {

  const [data, dispachData] = useReducer(data_reducer, null);

  return (
    <div className='container'>
      <DataContext.Provider
        value={{
          data,
          dispachData
        }}
      >

        <Suspense >
          <Routes>
            <Route path='/' element={
              <>
                <h1>Home</h1>
                <Link to='/registration'>Sign up</Link>
                <Link to='/login'>Sign in</Link>
              </>
            } />
            <Route path='/registration' element={<Registration />} />
            <Route path='/login' element={<LoginForm />} />
          </Routes>
        </Suspense>

      </DataContext.Provider>
    </div>
  );
}

export default App;
