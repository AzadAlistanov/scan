import './style.scss';


function Footer() {
  return (
    <div className='footer'>
      <div className='container'>
        <div className="footer__wrap">


          <img className='cursor' src="/images/logo-footer.png" alt="" />
          <div className='footer__info'>
            <p>г. Москва, Цветной б-р, 40</p>
            <p>+7 495 771 21 11</p>
            <p>info@skan.ru</p>
            <p>Copyright. 2022</p>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Footer;
