import { useContext,useState } from "react";
import userContext from "./context";
import Card from 'react-bootstrap/Card';
function Withdraw(){
const ctx = useContext(userContext);
const [withdraw,setWithdraw] = useState(0);
var [total,setTotal] = useState(ctx.users.find(user=>(user.name === name && user.password === pass)?user.amount:null));
var [name,setName] = useState('')
var [pass,setPass] = useState('');
var [onamt,setOnamt] = useState(0)
function handlePass(e){
const passwordVal = e.target.value;
if(!name && passwordVal !== ''){
alert("Fill the Name first!");
}
setPass(passwordVal)
}
function handleWithdraw(e){
const withdrawVal = e.target.value;
setOnamt(withdrawVal)
if(!name || !pass){
alert("Fill name and password first!");
return
}
let overdraft = false;
for(let i=0;i<ctx.users.length;i++){
const user = ctx.users[i];
if(user.name === name && user.password === pass){
const ctxamount = user.amount
if(ctxamount < withdrawVal){
overdraft = true;
break;
}
}
}
if(overdraft){
alert("Account Overdraft! You cannot withdraw more than your available balance.")
}
else{
setWithdraw(withdrawVal)
}
}
function handleClick(e){
e.preventDefault();
console.log(withdraw)
if(pass.length<8){
alert("Wrong Password!");
return;
}
let validAcc = false;
for(let i=0;i<ctx.users.length;i++){
const user = ctx.users[i];
if(user.name === name && user.password === pass){
const newTotal = user.amount - Number(withdraw);
setTotal(newTotal);
user.amount = newTotal;
alert("Amount Withdrawn Successfully!");
validAcc = true;
return;
}
}
if(!validAcc){
alert("Invalid Account!");
}

}
return(<>
<div className="create">
<Card className='card' border="success" style={{ width: '38rem',height:'30rem' }}>
<Card.Header className='account'>Withdraw</Card.Header>
<Card.Body>
<form style={{backgroundColor:'skyblue'}}>
<p className="total">Available Balance &nbsp;Rs. {total}</p>
<input type="text" placeholder="Enter Account Holder Name" value={name} onChange={(e)=>setName(e.target.value)} autoComplete="off"></input>
<input type="password" placeholder="Enter a Password" value={pass} onChange={handlePass} autoComplete="off"></input>
<input type="number" placeholder="Enter a Valid Amount" required onChange={handleWithdraw} autoComplete="off"></input>
<button onClick={handleClick} disabled={name === '' || pass === '' ||withdraw<=0 || ctx.users.find(user=>(user.name === name && user.password === pass)?user.amount<onamt:null)}>Withdraw</button>
</form>
</Card.Body>
</Card>
<br />
</div>
</>)
}
export default Withdraw;
