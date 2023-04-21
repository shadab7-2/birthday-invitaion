import './App.css';
import Invitation from './Components/Invitation';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Invitation
      subject="Birthday party Invitation"
      to="jaGdish@gmail.com"
      recipientName="jaGdish"
      occasion="birthday party"
      friend1="Ritu"
      friend2="Saurabh"
      friend3="Kartik"
      location="Green field Avenue"
      hostName="JaGdish"
    />
      </header>
    </div>
  );
}

export default App;
