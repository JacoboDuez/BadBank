function Login(){
    
    const [email,setEmail] = React.useState('');
    const [show,setShow] = React.useState(true);
    const [password,setPassword] = React.useState('');
    const [status,setStatus] = React.useState('');
    const varContext = React.useContext(userContext);

    function validate(field,label){
        if(!field){
            setStatus('Error: ' + label);
            setTimeout(()=>setStatus(''),3000);
        }
        return true;
    }


    function handleSubmit(){
        if(!validate(email,'email')) return;
        if(!validate(password,'password')) return;
        varContext.users.push({email,password})
        if (!checkUserCredentials){
            setShow(false);
        }
        else
        {
            setShow(true);
        }
    }

    function checkUserCredentials(){
        let found = false  
       found = varContext.users.filter((user)=>{
            if(user.email==email && user.password==password){
                return true;
            }
        });
        return found;
    }

    function clearForm(){
        setEmail('');
        setPassword('');
        setShow(true);
    }

    return(
        <Card
            bgcolor="secondary"
            header="Login"
            status={status}
            body={show?(
                <>
                    Email
                    <input type="text" className="form-control" id="email"
                    placeholder="Enter email" value={email} onChange={e=>setEmail(e.currentTarget.value)}/><br/>
                    Password
                    <input type="password" className="form-control" id="password"
                    placeholder="Enter password" value={password} onChange={e=>setPassword(e.currentTarget.value)}/><br/>
                    <button type="submit" className="btn btn-light" onClick={handleSubmit}>Login</button>
                    
                </>
            ):(
                <>
                    <h1>
                        <button type="submit" className="btn btn-light" onClick={clearForm}>Forgot Password</button>
                    </h1>
                </>
            )}
        />
    )


}