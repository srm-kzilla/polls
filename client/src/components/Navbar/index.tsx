import React from 'react';
import { ReactComponent as Logo } from '../../assets/svg/logo.svg';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import arrow from '../../assets/img/arrow.svg';
import link from '../../assets/img/link.svg';

interface Props {
  check: boolean;
}

const Nav = ({ check }: Props) => {
  const history = useHistory();
  return (
    <div className="flex mt-4 justify-between items-center">
      <Logo className="ml-5 w-12 cursor-pointer" onClick={() => history.push('/')}></Logo>

      {check ? (
        <Link to="/" className="text-white relative sm:text-sm text-xs px-4 py-3 bg-custom-purple  text-center ">
          SRMKZILLA QUIZ
          <img src={arrow} draggable={false} className="absolute h-full right-full top-0" alt="" />
          <img draggable={false} src={link} className="absolute h-full right-0 bottom-full" alt="" />
        </Link>
      ) : (
        <div>
          <Link
            className="mr-5 sm:mr-10 bg-custom-yellow-light text-custom-yellow-dark px-3 py-2 rounded-xl hover:bg-custom-yellow-hover transition-colors"
            to="/new"
          >
            Create new poll
          </Link>
        </div>
      )}
    </div>
  );
};

export default Nav;
