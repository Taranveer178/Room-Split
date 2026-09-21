function Groupcard(props){
    return(
        <div>
        <h1>{props.name}</h1>
        <p>Members: {props.members}</p>
        <p>Expenses: {props.totalExpense}</p>
        </div>
    )
}z
export default Groupcard