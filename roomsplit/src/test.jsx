import Header from './components/Header'
import Welcome from './components/Welcome'
import GroupCard from './components/GroupCard'

function App() {
  const groups=[
    {id:1, name:"Roomate", members:3, totalExpense:1000},
    {id:2, name:"College Friends", members:5, totalExpense:2000},
    {id:3, name:"Goa Trip", members:4, totalExpense:1500},
    {id:4, name:"Office Friends", members:4, totalExpense:3000}
  ]
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
      )

      )}
    </div>
  )
}

export default App