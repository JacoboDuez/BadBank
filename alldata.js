function AllData(){
    const varContext = React.useContext(userContext);
    // console.log(varContext);
    // console.log(JSON.stringify(varContext));
    // console.log(JSON.stringify(varContext.users[0].name));

        // function injectPosts(){
        //     let html= '';
        //     for(let i=0;i>=varContext.users.length;i++){
        //         html += "<tr>" + varContext.users[i].name + "</tr>" + "<tr>" + varContext.users[i].email + "</tr>" +  "<tr>" + varContext.users[i].balance +  "</tr>"
        //     }
        //     document.getElementById('tableRow').innerHTML = html
        // }
        
    return(
        
        <h1>All Data<br/>
            <table id="table-Outer">
               <tr className="table-Header-Row"> 
                    <th>Customer Name</th>
                    <th>Customer Registered Email</th>
                    <th>Customer current balance</th>
                </tr>
                <tr id="tableRow" onLoad="injectPosts()">
                    <td>{varContext.users[0].name}</td>
                    <td>{varContext.users[0].email}</td>
                    <td>{varContext.users[0].balance}</td>
                </tr>
            </table>
            {/* {JSON.stringify(varContext)} */}
        </h1>
    );
}
