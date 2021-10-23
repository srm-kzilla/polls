import Black from '../../assets/svg/Black.svg';
import Group from '../../assets/img/Group_110.png';

const Footer = () => {
  return (
    <footer className="flex flex-row w-full z-0 justify-between items-baseline fixed bottom-0">
      <img src={Group} className="w-44"></img>
      <img src={Black} className="mr-4 w-6 pb-3"></img>
    </footer>
  );
};

export default Footer;
