import Rest from './components/componentresto';
import './App.css';

function App() {

  const restos = [
    {
      identity: 'a1',
      distance: '5 kms',
      name: 'Little Italy',
      timing: 'Open till 10pm'
    },
    {
      identity: 'a2',
      distance: '3.2 kms',
      name: 'Burger King',
      timing: 'Open 24/7'
    },
    {
      identity: 'a3',
      distance: '0.9 kms',
      name: 'Hamsa Multicuisine',
      timing: 'Open till 9pm (with reservations)'
    },
    {
      identity: 'a4',
      distance: '7.7 kms',
      name: 'Dunkin Donuts',
      timing: 'Open till 11pm'
    },
    {
      identity: 'a5',
      distance: '4 kms',
      name: 'Taco Bell',
      timing: 'Open 24/7'
    }
  ]

  return (
   <div>
    <h1>Meal Master 3000: Your one stop site for all things food !</h1>
    <Rest name={restos[0].name} distance={restos[0].distance} timing={restos[0].timing}></Rest>
    <Rest name={restos[1].name} distance={restos[1].distance} timing={restos[1].timing}></Rest>
    <Rest name={restos[2].name} distance={restos[2].distance} timing={restos[2].timing}></Rest>
    <Rest name={restos[3].name} distance={restos[3].distance} timing={restos[3].timing}></Rest>
    <Rest name={restos[4].name} distance={restos[4].distance} timing={restos[4].timing}></Rest>
   </div>
  );
}

export default App;
