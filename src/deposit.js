import { useContext,useState } from "react";
import userContext from "./context";
import Card from 'react-bootstrap/Card';
import './App.css';
function Deposit(){
const ctx = useContext(userContext);
const [deposit,setDeposit] = useState(0);
var [total,setTotal] = useState(ctx.users.find(user=>(user.name === name && user.password === pass)?user.amount:null));
var [name,setName] = useState('')
var [pass,setPass] = useState('');
function handlePass(e){
const passwordVal = e.target.value;
if(!name && passwordVal !== ''){
alert("Fill the Name first!");
}
setPass(passwordVal)
}
function handleDeposit(e){
const depositVal = e.target.value;
if(!name || !pass){
alert("Fill name and password first!");
return
}
if(depositVal<=0){
alert("Negative Deposit!");
}
setDeposit(depositVal)
}
function handleClick(e){
e.preventDefault();
console.log(deposit)
if(pass.length<8){
alert("Wrong Password!");
return;
}
let validAcc = false;
for(let i=0;i<ctx.users.length;i++){
const user = ctx.users[i];
if(user.name === name && user.password === pass){
const newTotal = user.amount + Number(deposit);
setTotal(newTotal);
user.amount = newTotal;
alert("Amount Deposited Successfully!");
validAcc = true;
return;
}
}
if(!validAcc){
alert("Invalid Account!")
}
}
return(<>
<div className="create">
<Card className='card' border="success" style={{ width: '38rem',height:'30rem' }}>
<Card.Header className='account'>Deposit</Card.Header>
<Card.Body>
<form  style={{backgroundColor:'skyblue'}}>
<p className="total">Available Balance &nbsp;Rs. {total}</p>
<input type="text" placeholder="Enter Account Holder Name" value={name} onChange={(e)=>setName(e.target.value)} autoComplete="off"></input>
<input type="password" placeholder="Enter a Password" value={pass} onChange={handlePass} autoComplete="off"></input>
<input type="number" placeholder="Enter a Valid Amount" onChange={handleDeposit} autoComplete="off"></input>
<button onClick={handleClick} disabled={name==='' || pass === '' || deposit<=0}>Deposit</button>
</form>
</Card.Body>
</Card>
<br />
</div>
</>)
}
export default Deposit;
