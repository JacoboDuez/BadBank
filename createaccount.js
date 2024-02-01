function CreateAccount(){

    const [show,setShow] = React.useState(true);
    const [status,setStatus] = React.useState('');
    const [name,setName] = React.useState('');
    const [email,setEmail] = React.useState('');
    const [password,setPassword] = React.useState('');
    const varContext = React.useContext(userContext);

    function validate(field,label){
        if(!field){
            setStatus('Error: ' + label);
            setTimeout(()=>setStatus(''),3000);
            return false;
        }
        return true;
    }

    function handleCreate(){
        console.log(name,email,password);
        if(!validate(name,  'name')) return;
        if(!validate(email,  'email')) return;
        if(!validate(password,  'password')) return;
        if(!checkExistingAccounts(name,email)){
            varContext.users.push({name,email,password,balance:100});
            setShow(false);
        }
        else{
            clearForm();
            alert('There is an account already linked to that email address, try a different user and email!');
        }

    }

    function checkExistingAccounts(name,email){
        let bExisting = false;
        for(let i=0;i<varContext.users.length;i++){
            console.log(varContext.users[i]);
            console.log(varContext.users[i].name);
            console.log(varContext.users[i].email);
            if(varContext.users[i].name == name && varContext.users[i].email==email){
                bExisting = true ;
            }
        }
        return bExisting;
    }


    function clearForm(){
        setName('');
        setEmail('');
        setPassword('');
        setShow(true);
    }

    
    return(
        <Card
            bgcolor="primary"
            header="Create Account"
            status={status}
            body={show ? (
                <>
                Name<br/>
                <input type="input" className ="form-control"  id="name"
                placeholder="Enter your name" value={name} onChange={e=>setName(e.currentTarget.value)}/><br/>
                Email Address<br/>
                <input type="input" className ="form-control"  id="email"
                placeholder="Enter email" value={email} onChange={e=>setEmail(e.currentTarget.value)}/><br/>
                Password<br/>
                <input type="password" className ="form-control"  id="password"
                placeholder="Enter password" value={password} onChange={e=>setPassword(e.currentTarget.value)}/><br/>
                <button type="submit" className="btn btn-light" onClick={handleCreate}>Create Account</button>
                </>
            ):(
                <> 
                <h5>Success</h5>
                <button type="submit" className="btn btn-light" onClick={clearForm}>Add Another Account</button>
              </>
            )
        }

        />
    );
}