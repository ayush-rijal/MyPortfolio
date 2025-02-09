import {FloatingDockDemo} from '../components/Footer-icon';
const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <FloatingDockDemo/>
      </div>

      <p className="text-white-500">© 2024 Ayush Rijal. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
