import React, {useState} from "react";
import {robots} from "./robots"
import CardList from "./components/CardList"
import SearchBox from "./components/SearchBox"
import "./App.css"
import 'tachyons'



const App = () =>{
  const [searchField, setSearchField] = useState("")

  const onSearchChange = (event) => {
      setSearchField(event.target.value)
  }


  const filteredRobots = robots.filter(robot =>{
    return robot.name.toLowerCase().includes(searchField.toLowerCase())
  })
  return(
    
    <>
    <div className='tc'>
        <h1 className="f1">Robot Friends</h1>
        <SearchBox searchChange={onSearchChange} searchFields={setSearchField} /> 
        <CardList robots={filteredRobots} />
    </div>
    </>
  )
}

export default App;
