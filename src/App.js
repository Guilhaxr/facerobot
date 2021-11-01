import React, {useState} from "react";
import {robots} from "./robots"
import CardList from "./components/CardList"
import SearchBox from "./components/SearchBox"
import 'tachyons'



const App = () =>{
  const [searchFild, setSearchField] = useState(robots)

  const onSearchChange = (event) => {
    console.log(event.target.value)
  }

  return(
    <>
    <div className='tc'>
        <h1>RobotFriends</h1>
        <SearchBox searchChange={onSearchChange} /> 
        <CardList robots={searchFild} />
    </div>
    </>
  )
}

export default App;
