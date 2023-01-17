
import {useState} from "react";
import Unit_list from "./Combat_table_components/Unit_list";
import unit_list from "./Combat_table_components/Unit_list";

function App() {
    const [units,SetUnits] = useState([]);

    function getRandomInt(max) {
        return Math.floor(Math.random() * max) + 1;
    }
    function addEnemy(enemy){
        SetUnits([...units,{name:enemy.name, init: getRandomInt(10) + enemy.ref, hp: enemy.hp,
            armor_body: enemy.armor, armor_head: enemy.armor, speed: enemy.move}]);
        console.log(units)

    }

    return (
      <div className="App">
        <Unit_list units={units} addEnemy={addEnemy}/>
      </div>
    );
}

export default App;
