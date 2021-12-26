

import './App.css';
import Tarif from './components/Tarif.jsx';
import './components/Tarif.css';

const tarifs = [{name : "Безлимитный 300", color : 'rgb(159, 238, 231)', price : "300 руб./мес", speed :"до 10 Мбит/сек", text :"Объем включенного тарифа не ограничен"},
{ name :"Безлимитный 450", color : '#008000', price:"450 руб./мес" ,speed :"до 50 Мбит/сек", text:"Объем включенного тарифа не ограничен"},
{name:"Безлимитный 550", color : 'rgb(209, 47, 68)', price:"550 руб./мес" ,speed:"до 200 Мбит/сек" ,text:"Объем включенного тарифа не ограничен"},
{name:"Безлимитный 1000",color : 'rgb(8, 8, 8)', price:"1000 руб./мес", speed:"до 10 Мбит/сек", text:"Объем включенного тарифа не ограничен"}
]

function App () {
  return (
    <>

    <div className="App">
      {
        tarifs.map((tarif) => <Tarif name={tarif.name} color={tarif.color} price= {tarif.price} speed = {tarif.speed} text = {tarif.text}></Tarif>
        )
      }
      
    </div>
    </>
  );

}

export default App;
