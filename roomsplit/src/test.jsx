import Header from './components/Header'
import Welcome from './components/Welcome'
import GroupCard from './components/GroupCard'
import {useState} from 'react'

function App() {

  const [groups, setGroups]= useState([
    {id:1, name:"Roomate", members:3, totalExpense:1000},
    {id:2, name:"College Friends", members:5, totalExpense:1500},
    {id:3, name:"Goa Trip", members:6, totalExpense:16500},
    {id:4, name:"Office Colleges", members:4, totalExpense:3000},
  ]
  )

  function addGroup(){
     const new_group = {id:5, name:"New Group", members:2, totalExpense:500}
     setGroups([...groups, new_group])
  }
  
  return (
    <div>
      <Header />
      <Welcome name="Taran" />
      {groups.map((e)=>(
        <GroupCard 
        key={e.id}
        name={e.name}
        members={e.members}
        totalExpense={e.totalExpense}
        />
      ))}
      <button onClick={addGroup}>Add Group</button>
    
    </div>
  )
}

export default App