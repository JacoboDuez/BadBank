
function SPA(){
    return(
        <HashRouter>
            <NavBar/>
                <userContext.Provider value={{users:[{name:'Jacobo',email:'jacoboduez@hotmail.com',password:'mySecret',balance:101}]}}>
                    <Route path="/" exact component={Home}/>
                    <Route path="/CreateAccount/" component={CreateAccount}/>
                    <Route path="/login/" component={Login}/>
                    <Route path="/deposit/" component={Deposit}/>
                    <Route path="/alldata/" component={AllData}/>
                    <Route path="/withdraw/" component={Withdraw}/>
                </userContext.Provider>
        </HashRouter>
        
    );
}

ReactDOM.render(<SPA/>,document.getElementById('root'))

