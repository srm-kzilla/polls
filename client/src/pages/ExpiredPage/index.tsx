import React from 'react';
import Footer from '../../components/footer';
import Nav from '../../components/Navbar';
import err from '../../assets/img/expired.png';
import { useHistory } from 'react-router-dom';

const Expired = () => {
  const history = useHistory();
  return (
    <div className="h-screen w-screen overflow-auto">
      {/* <div>
        <h1 className="text-9xl">404</h1>
        <p>This page could not be found</p>
      </div> */}
      <Nav check={true} />
      <div className="absolute w-full z-10 top-1/2 left-1/2 transform text-center -translate-x-1/2 -translate-y-1/2">
        <img src={err} className="mx-auto sm:h-96 h-64" alt="" />
        <p className="sm:px-10 px-5 mt-3">
          Oops :( looks like this poll has ended. Go back to the{' '}
          <span className="text-custom-red-dark font-semibold cursor-pointer" onClick={() => history.push('/')}>
            home page
          </span>{' '}
          to create your own poll.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Expired;
