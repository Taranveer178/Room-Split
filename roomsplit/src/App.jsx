import Header from './components/Header'
import Welcome from './components/Welcome'
import GroupCard from './components/GroupCard'
import { useState } from 'react'

function App(){

  const [groups, setGroup] = useState([
    {id:1, name:"Room 101", members:3, totalExpense: 1000},
    {id:2, name:"Travel Friends", members:9, totalExpense: 8000},
    {id:3, name:"Office Team", members:8, totalExpense: 2000},
  ])

  function addGroup(){
    const new_group= {id:4, name:"Test Group", members:2, totalExpense: 500}
    setGroup([...groups, new_group])
  }
  return(
    <div>
      <Header />
      <Welcome name ="Taran" />
      {groups.map((e)=>(
          <GroupCard
          key={e.id}
          name= {e.name}
          members={e.members}
          totalExpense={e.totalExpense} />
      ))}
      
     
      <button onClick={addGroup}>Add Test Group</button>
    </div>
  )

}
export default App