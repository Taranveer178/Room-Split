import GroupCard from './components/GroupCard'
import Header from './components/Header'
import Welcome from './components/Welcome'
import { useState } from 'react'

function App(){
  const [groupName, setGroupName]=useState("")
  const [groupDescription, setGroupDescription]=useState("")
  const [groups, setGroups] =useState([
    {id:1, name:"Room", members:3, totalExpense:1000},
    {id:2, name:"Office", members:5, totalExpense:1200},
    {id:3, name:"Goa Trip", members:8, totalExpense:1600},
  ])
  function addGroup(){
     const new_group=  {id:groups.length +1, name:"Room", members:3, totalExpense:1000}
     setGroups([...groups, new_group])
     console.log("RoomSplit is working!")
  }
  function deleteGroup(){
      console.log("Group deleted")
  }
  function createGroup(){
    e.preventDefault()
    console.log("creating group")
  }
  return(
    <div>
      <Header />
      <Welcome name ="Taran" />
      {groups.map((e)=>(
        <GroupCard 
        key={e.id}
        name={e.name}
        members={e.members}
        totalExpense={e.totalExpense}
        />
      ))}

      <button onClick={addGroup}>Add Group</button>

      <button onClick={deleteGroup}>Delete</button>
      <br/>
      <form onSubmit={createGroup}>
      <input type="text" value={groupName} onChange={(e)=>setGroupName(e.target.value)}/>
      <br />
      <input type="text" value={groupDescription} onChange={(e)=>setGroupDescription(e.target.value)} />
      <button type="submit">Submit</button>
      </form>
      <p>Group Name: {groupName}</p>
      <p> Group Description: {groupDescription}</p>
    </div>
  )
}
export default App