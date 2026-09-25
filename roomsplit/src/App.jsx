import React from "react";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import GroupCard from "./components/GroupCard";
import { useState } from "react";

function App(){

  const [groups, setGroups] = useState([
    {id:1, name:"Room", members:3, totalExpense:1500},
    {id:2, name:"College", members:3, totalExpense:1500},
    {id:3, name:"Goa Trip", members:3, totalExpense:1500},

  ])
  function createGroup(){
        const newGroup={id:groups.length+1, name:"", members:8, totalExpense:1600}
        setGroups([...groups,newGroup])
  }
  return(
    <>
    <Header />
    <Welcome name="Taran"/>

    <h3>Create New Group</h3>
    <form onSubmit={createGroup}>
      Group Name: <input value={groupName} type="text" name="groupname" id="" onChange={(e)=>setGr}/> <br />
      Members: <input value={groupMembers} type="text" name="members" id=""/><br />
      <button type="submit">Submit</button>
    </form>

    {groups.map((e)=>(
      <GroupCard key ={e.key} name ={e.name} members={e.members} totalExpense={e.totalExpense}/>
    ))}

    </>
  )
}
export default App