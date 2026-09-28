import LogoHeader from './LogoHeader';
import Tab from './Tab';

export default function Register(){
  return(
    <div className="container">
      <div className="form-box">
        <LogoHeader></LogoHeader>
        <div className="header-section">
          <h1>Create your account</h1>
          <p>start tracking your spending in minutes.</p>
        </div>
        <Tab></Tab>
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
