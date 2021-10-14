import footerOne from '../../assets/img/Rectangle_2.png';
import footerTwo from '../../assets/img/footer_2.png';
import footerThree from '../../assets/img/vector_4.png';

const Footer = () => {
  return (
    <footer className="flex flex-row w-full z-0 justify-between fixed bottom-0">
      <div className="relative">
        <img src={footerOne} className="absolute left-4 w-96"></img>
        <img src={footerTwo} className=""></img>
      </div>
      <div className="relative">
        <img src={footerThree} className="absolute"></img>
      </div>
    </footer>
  );
};

export default Footer;
