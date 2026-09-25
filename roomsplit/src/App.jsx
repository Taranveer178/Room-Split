import Header from "./components/Header";
import Welcome from "./components/Welcome";
import GroupCard from "./components/GroupCard";
import { useState } from "react";

function App(){
   const [groups, setGroups] =useState([
      {id:1, name:"Room", members:3, totalExpense:1400},
      {id:2, name:"Room2", members:3, totalExpense:1400},
      {id:3, name:"Room3", members:3, totalExpense:1400},
    ])
    function addGroup(){
      const new_group =  {id:4, name:"Room4", members:3, totalExpense:1400}
      setGroups([...groups, new_group])
    
    }
  return(
    <div>
    <Header />
    <Welcome />
    {groups.map((e)=>(
      <GroupCard key={e.id} name={e.name} members={e.members} totalExpense={e.totalExpense} />
    ))}
    <button onClick={addGroup}>Add Group</button>
    </div>
  )
}
export default App