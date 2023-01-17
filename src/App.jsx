import { useReducer } from 'react';
import './App.scss';
import DataContext from './Components/DataContext';
import Registration from './Components/RegistrationForm';
import data_reducer from './Reducers/dataReducer';

function App() {

  const [data, dispachData] = useReducer(data_reducer, null);

  return (
    <div className='container'>
      <DataContext.Provider
        value={{
          data,
          dispachData,
        }}
      >
        <Registration />
      </DataContext.Provider>
    </div>
  );
}

export default App;
