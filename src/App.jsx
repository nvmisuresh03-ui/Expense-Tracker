import './App.css'
import logo from './assets/expense-tracker-icon.svg'
function App() {

  return (
    <Register></Register>
  )
}

export default App

function LogoHeader(){
  return(
    <div className="logo-header">
      <img
        className="icon"
        src={logo}
        alt="Expense Tracker"
        width="50"
        height="50"
      />

      <div>
        <span className="header-txt">Expense</span>
        <span className="new-color"> Tracker</span>
      </div>
    </div>
  );
}

function TabSection(){
   <div className="tabs">
      <button className="tab active">Login</button>
      <button className="tab">Register</button>
    </div>
}

function Login(){
    return (
    <div className="container">

      <div className="form-box">
        <LogoHeader></LogoHeader>
        <div className="header-section">
          <h1>Welcome Back</h1>

          <p>
            Track Spending, hit your goals, stay in control
          </p>
        </div>

       <TabSection></TabSection>

        <div className="form">

          <label>Email</label>
          <input type="email" />

          <label>Password</label>
          <input type="password" />

          <button className="button">
            Login
          </button>

        </div>

      </div>

    </div>
  );
}

function Register(){
  return(
    <div className="container">
      <div className="form-box">
        <LogoHeader></LogoHeader>
        <div className="header-section">
          <h1>Create your account</h1>
          <p>start tracking your spending in minutes.</p>
        </div>
        <TabSection></TabSection>
        <div className="form">
          <label>Full Name</label>
          <input type="text"></input>
          <label>Email</label>
          <input type="email"></input>
          <label>Password</label>
          <input type="text"></input>
          <label>Confirm Password</label>
          <input type="text"></input>
          <div className="terms-section">
            <input type="checkbox" /><span className="terms-text">I agree to the 
              <span className="new-color"> terms of service</span> and 
              <span className="new-color"> privacy policy</span></span>
          </div>
          <button className="button">
            Create account
          </button>
        </div>
      </div>        
    </div>
  );
}