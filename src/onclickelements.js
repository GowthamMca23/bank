import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function handleClick(element){
    alert(`hey ! you clicked: ${element} `);
}
export default function OnClickElements(){
    return(
    
    <>
    
    <div className="container-div">
        <div className="grid-1">
        <div id="1" className="ele1" onClick={(e)=>handleClick(`div-element-${e.target.id}`)}>I am DIV</div><br/>
       <span id="2" className="ele2"onClick={(e)=>handleClick(`span-element-${e.target.id}`)}>I am SPAN</span><br/>
       <button id="3" className="ele3" onClick={(e)=>handleClick(`Button-element-${e.target.id}`)}>I am Button </button><br/>
       <a  id="4" className="ele4" onClick={(e)=>handleClick(`Link-element-${e.target.id}`)}>I am Link </a>
        </div><br/>
       
       <div className="grid-2">
       <div id="5" className="ele5" onClick={(e)=>handleClick(`div-element-${e.target.id}`)}>I am DIV</div><br/>
       <span   id="6" className="ele6" onClick={(e)=>handleClick(`span-element-${e.target.id}`)}>I am SPAN</span><br/>
       <Button   id="7" className="ele7" onClick={(e)=>handleClick(`Button-element-${e.target.id}`)}>I am Button </Button><br/>
       <a    id="8"  className="ele8" onClick={(e)=>handleClick(`Link-element-${e.target.id}`)}>I am Link </a>
       </div>
      
      
      




    </div>
    
    </>
    
    )


}