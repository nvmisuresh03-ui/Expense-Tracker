
import LogoHeader from './LogoHeader';
import Tab from './Tab';

export default function Login(){
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

       <Tab></Tab>

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