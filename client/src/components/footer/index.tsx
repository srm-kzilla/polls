import Black from '../../assets/svg/Black.svg';
import Group from '../../assets/img/Group_110.png';
import { useHistory } from 'react-router';
import footerVector from '../../assets/img/footerVector.svg';

const Footer = () => {
  const history = useHistory();
  return (
    <footer className="flex flex-row w-full z-0 justify-between items-baseline fixed bottom-0">
      <img src={Group} className="sm:w-64 w-36" alt=""></img>
      <img
        src={Black}
        onClick={() => window.open('https://srmkzilla.net/')}
        className="mr-4 w-6 pb-3 cursor-pointer z-50"
        alt=""
      ></img>
      <img src={footerVector} className="z-0 absolute sm:block hidden h-28 right-0 bottom-0" alt="" />
    </footer>
  );
};

export default Footer;
