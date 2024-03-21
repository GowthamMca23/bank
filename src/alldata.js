import userContext from "./context";
import {useContext} from 'react';
import './App.css';
// import { useState } from "react";
// import axios from 'axios';
function Alldata(){
const ctx = useContext(userContext)
return(<><br></br>
<h1 className="account">Alldata</h1><br></br>
{/* <h2>{JSON.stringify(ctx.users[0])}</h2> */}
<table>
<tr>
<th><td>Name</td></th>
<th><td>Email</td></th>
<th><td>Password</td></th>
<th><td>Amount</td></th>
</tr>
{
ctx.users.map((item,key)=>{
return      <tr>
<td>{item.name}</td>
<td>{item.email}</td>
<td>{item.password}</td>
<td>{item.amount}</td>
</tr>
})
}
</table>
</>)
}
export default Alldata;
