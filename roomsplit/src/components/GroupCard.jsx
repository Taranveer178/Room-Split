function GroupCard(props){
    return(
        <>
        <h2>{props.name}</h2>
        <p>Members: {props.members}</p>
        <p>Total Expense: {props.totalExpense}</p>

        </>
    )
}
export default GroupCard