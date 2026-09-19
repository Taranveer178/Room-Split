function GroupCard(props){
    return(
        <div>
            <h3>{props.name}</h3>
            <p>Members: {props.members}</p>
            <p>Total Expense : {props.totalExpense}</p>
        </div>
    )
}
export default GroupCard