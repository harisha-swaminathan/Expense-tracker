import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogout} from '../actions/auth';
export const Header = ({startLogout}) => (
  <header className="header-color">
  <div className="container">
  <div className="header-color__content">
    <Link className="header-color__title" to="/dashboard"><h1>Expense Tracker</h1></Link>
    <button className="button-color button-merge" onClick={startLogout}>Logout </button>
    </div>
    </div>
  </header>
);

const mapDispatchToProps=(dispatch)=>({
  startLogout:()=> dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
