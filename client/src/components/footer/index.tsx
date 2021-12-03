import Black from '../../assets/svg/Black.svg';
import Group from '../../assets/img/Group_110.png';
import { useHistory } from 'react-router';


const Footer = () => {
  const history = useHistory();
  return (
    <footer className="flex flex-row w-full z-0 justify-between items-baseline fixed bottom-0">
      <img src={Group} className="w-44"></img>
      <img
        src={Black}
        onClick={() => window.open('https://srmkzilla.net/')}
        className="mr-4 w-6 pb-3 cursor-pointer"
      ></img>

    </footer>
  );
};

export default Footer;
