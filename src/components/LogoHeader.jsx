
import logo from '../assets/expense-tracker-icon.svg'


export default function LogoHeader(){
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
