import React from 'react';
import { ReactComponent as Logo } from '../../assets/svg/logo.svg';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

interface Props {
  check: boolean;
}

const Nav = ({ check }: Props) => {
  const history = useHistory();
  return (

    <div className="flex justify-between items-center  h-1/6 ">
      <Logo className="ml-5 w-12 cursor-pointer" onClick={() => history.push('/')}></Logo>
      {check ? (
        <Link to="/" className="text-white relative px-4 py-3 bg-blue-900  text-center ">
          SRKZILLA QUIZ
        </Link>
      ) : (
        <div>
          <Link
            className="mr-5 sm:mr-10 bg-custom-yellow-light text-custom-yellow-dark px-3 py-2 rounded-xl hover:bg-custom-yellow-hover transition-colors"
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
