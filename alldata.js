function AllData(){
    const varContext = React.useContext(userContext);
    return(
        <h1>All Data<br/>
            {JSON.stringify(varContext)}
        </h1>
    );
}