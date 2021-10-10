import React from 'react';
import { ReactComponent as Logo } from '../../assets/svg/logo.svg';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="flex justify-between items-center h-1/6">
      <Logo className="ml-5 w-12"></Logo>
      <div>
        <Link className="mr-10" to="/about">
          About
        </Link>
        <Link className="mr-10 bg-yellow-200 px-3 py-2 rounded-xl shadow" to="/polls">
          Create new poll
        </Link>
      </div>
    </div>
  );
};

export default Nav;
