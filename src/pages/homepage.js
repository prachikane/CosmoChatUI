import { useNavigate } from 'react-router-dom';
import '../App.css';
import Button from 'react-bootstrap/Button';

const HomePage = () =>{
    const navigate = useNavigate();
    return (
        <div className="App">
          <header className="App-header">
            <Button onClick={() =>{navigate('/cosmochat')}}>New CosmoChat Window</Button>
          </header>
        </div>
      );
}
export default HomePage