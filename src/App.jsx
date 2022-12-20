import './App.scss';
import DataContext from './Components/DataContext';
import RegistrationForm from './Components/RegistrationForm';

function App() {
  return (
    <>
      <DataContext.Provider
        value={{

        }}
      >
        <RegistrationForm />
      </DataContext.Provider>
    </>
  );
}

export default App;
