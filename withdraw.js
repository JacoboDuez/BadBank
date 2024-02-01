function Withdraw(){

    const [withdrawAmount,setWithdrawAmount] = React.useState(0);
    const varContext = React.useContext(userContext);
    const [status,setStatus] = React.useState('');
    const [balance,setBalance] =  React.useState(100);
    const [show,setShow] = React.useState(true);
    

    function ValidateInputs(field,label){
        if(!field){
            setStatus('Error ' + label);
            setTimeout(()=>setStatus(''),3000);
        }
        return true;
    }

    function  handleSubmit(){
            if(!ValidateInputs(balance,'balance')) return;
            if(!ValidateInputs(withdrawAmount,'withdraw')) return;
            if(!checkUserFunds(balance,withdrawAmount)) return;
            setBalance(balance-withdrawAmount);
    }



    function checkUserFunds(){
        let userFunds = false;  
        console.log(withdrawAmount);
         if(balance-withdrawAmount>=0) {
             userFunds = true;
             document.getElementById('balance').innerHTML = 
             balance -  withdrawAmount;
         }
         else
         {  
            const newDiv = document.createElement('div');
            const newContent = document.createTextNode('You have insufficient funds in your account!');
            setShow(false);
            setStatus(false);// it is not feasible to complete the transaction
            newDiv.appendChild(newContent);
            const currentDiv = document.getElementById("withdraw-again");
            document.body.insertBefore(newDiv,currentDiv);
         }
             return userFunds;
     }
     

    function clearForm(){
        setDeposit(0);
        setBalance(balance);
        setStatus(true);
        setShow(false);
    }

    return(
        <Card
            bgcolor="primary"
            header="Withdraw"
            status = {status}
            body={show?(
            <>
                    Current Balance:<br/>
                    <div  id="balance" value={balance}>{balance}</div><br/>
                    Amount to Withdraw
                    <input type="number" className="form-control" id="withdrawAmount"
                    placeholder="Enter amount to withdraw" value={withdrawAmount} onChange={(e)=>setWithdrawAmount(e.currentTarget.value)}/><br/>
                    <button type="submit" className="btn btn-light" onClick={handleSubmit} title="this will take you to a validation screen">Withdraw</button>
                </>
            ):(
                <>
                    <div id="withdraw-again">
                        <input>
                            <button onClick={clearForm}>
                                Withdraw again
                            </button>
                        </input>
                    </div> 
                </>
            )}
        />)

}