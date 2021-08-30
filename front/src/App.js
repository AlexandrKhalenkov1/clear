import axios from 'axios';
import './App.css';

function App() {
  const test = () => {
   console.log('Sended');
   let message = {5:'hello'};
   axios.post('http://localhost:5000/api/test', message );
  };
  return (
  <div className="wrapper">
    {/* <form action="/action_page.php" className="register-form">
      <label htmlFor="fname" className="register-text">First name:</label><br/>
      <input type="text" className="register-input" id="fname" name="fname" value="John"/><br/>
      <label htmlFor="lname" className="register-text">Last name:</label><br/>
      <input type="text" className="register-input" id="lname" name="lname" value="Doe"/><br/>
      <input type="submit" className="register-button" value="Submit"/><br/>
    </form> */}

    <div className="page-wrapper">
      <div className="header">
        <span className="text">Header</span>
      </div>
      <div className="navbar">
        <span className="text">Navigation menu</span>
      </div>
      <div className="content">
        <div className="content__item">
          <span className="text">content</span> 
        </div>
        <div className="content__item main">
          <span className="text">Main content</span>
        </div>
        <div className="content__item">
        <span className="text">content</span>
        </div>
      </div>
      <div className="footer"> 
        <span className="text">footer</span>
      </div>
    </div>


  </div>
  );
}

export default App;
