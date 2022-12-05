import './App.css'
import DieRoller from './DieRoller'
import StatRoller from './StatRoller'

function App() {
  return (
    <div className='coverBox'>
      <div className='mainBox'>
        <DieRoller />
        <StatRoller />
      </div>
    </div>
  );
}

export default App;
