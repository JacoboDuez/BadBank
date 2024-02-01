function NavBar(){

    return(<>
            <main className="navbar-main">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Welcome to Bank Of America</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                    <a className="nav-link" href="#">Bad Bank <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                    <a className="nav-link" href="#/CreateAccount/">Create Account</a>
                    </li>
                    <li className="nav-item active">
                    <a className="nav-link" href="#/login/">Login</a>
                    </li>
                    <li className="nav-item active">
                    <a className="nav-link" href="#/deposit/">Deposit</a>
                    </li>
                    <li className="nav-item active">
                    <a className="nav-link" href="#/withdraw/">WithDraw</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#/balance/">Balance</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#/alldata/">All Data</a>
                    </li>
                </ul>
                </div>
            </nav> 
            </main>
    </>);

}