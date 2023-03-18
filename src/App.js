
import './App.css';
import Card from './components/Card';
import Content from './components/Content';
import NavBar from './components/NavBar';
function App() {
  return (
    <>
      <NavBar />
      <Content/>
      <section className='my-28 w-8/12 mx-auto flex gap-4'>
        <Card />
        <Card />
        <Card />
      </section>
    </>
  );
}

export default App;
