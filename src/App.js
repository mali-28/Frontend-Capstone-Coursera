
import './App.css';
import { DetailsProvider } from './hooks/useDetails';
import All from './routes/All';

function App() {
  return (
    <>
    <DetailsProvider>
      <All/>
      </DetailsProvider>
    </>
  );
}

export default App;
