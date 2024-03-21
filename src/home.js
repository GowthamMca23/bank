import Card from 'react-bootstrap/Card';
import './App.css'
import bank from './images/bank.avif'
function Home(){
return(<>
<Card className="text-center" style={{backgroundColor:"black"}}>
<Card.Header className='header'></Card.Header>
<Card.Body>
<Card.Title className='title' >BAD BANK</Card.Title>
<Card.Text>
<img className='homeimg' src={bank} alt='' height='475px' width='1000px'></img>
<p className='msg'> <br></br>
</p>
</Card.Text>
</Card.Body>
<Card.Footer className="text-muted" style={{backgroundColor:'darkblue'}}>Developed by &copy;Kumudhapriya</Card.Footer>
</Card>
</>)
}
export default Home;
