function Balance(){
    const varContext = React.useContext(userContext);
    return(
        <table className="tableGrid">
            <tr>
                <th>Customer Name</th>
                <th>Customer Registered Email</th>
                <th>Customer current balance</th>
            </tr>
            <tr>
                <td>{varContext.users[0].name}</td>
                <td>{varContext.users[0].email}</td>
                <td>{varContext.users[0].balance}</td>
            </tr>
        </table>
    );
}