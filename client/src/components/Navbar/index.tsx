import React from 'react';
import { ReactComponent as Logo } from '../../assets/svg/logo.svg';
import { Link } from 'react-router-dom';

interface Props {
  check: boolean;
}

const Nav = ({ check }: Props) => {
  return (
    <div className="flex justify-between items-center h-1/6">
      <Logo className="ml-5 w-12"></Logo>
      {check ? (
        <Link to="/" className="text-custom-blue-light hover:underline text-center mr-5 sm:mr-10">
          SRKZILLA QUIZ
        </Link>
      ) : (
        <div>
          <Link
            className="mr-3 sm:mr-10 bg-custom-yellow-light text-custom-yellow-dark px-3 py-2 rounded-xl shadow"
            to="/polls"
          >
            Create new poll
          </Link>
        </div>
      )}
    </div>
  );
};

export default Nav;
