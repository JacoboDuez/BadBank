function Deposit(){
    const varContext = React.useContext(userContext);
    const [balance,setBalance] = React.useState(100);
    const [show,setShow] = React.useState(true);
    const [deposit,setDeposit] = React.useState('');
    const [status,setStatus] = React.useState(true);
    

    function validate(field,label){
        if(!field){
            setStatus('Error: ' + label);
            setTimeout(()=>setStatus(''),3000);
        }
        return true;
    }


    function handleSubmit(){
        if(!validate(balance,'balance')) return;
        if(!validate(deposit,'deposit')) return;
        varContext.users.push({balance,deposit});
        updateFunds();
        setShow(false);
    }

    function updateFunds(){
        if(deposit>0){
            setBalance(balance+deposit);
            setDeposit(deposit);
        }
    }
    
    function clearForm(){
        setBalance('');
        setDeposit('');
        setShow(true);
    }

    return(<>
        <Card
            bgcolor="danger"
            header="Deposit Form"
            status={status}
            body={show?(
                <>
                    Current Balance:<br/>
                    <div  id="balance" value={balance}>{balance}</div><br/>
                    Deposit Amount
                    <input type="number" className="form-control" id="deposit"
                    placeholder="Enter deposit amount" value={deposit} onChange={(e)=>setDeposit(e.currentTarget.value)}/><br/>
                    <button type="submit" className="btn btn-light" onClick={handleSubmit} title="this will take you to a validation screen">Deposit</button>
                </>
            ):(
                <>
                    <h1>Your deposit was processed <span id="remarkable">successfully!</span>
                        <button type="submit" className="btn btn-light" onClick={clearForm} title="This will take you to the balance section">View Balance</button>
                    </h1>
                </>
            )}
        />
</>
    )


}