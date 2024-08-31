import { Link } from 'react-router-dom'
import AccountPanel from './accountPanel';
import './style.scss';


function Header() {
  return (
    <div className='header'>
      <div className='container'>
        <div className='header__wrap'>
          <Link to={'/'}>
            <img className='cursor header__logo' src="/images/logo.png" alt="" />
          </Link>
          <nav>
            <ul>
              <li className='cursor'>Главная</li>
              <li className='cursor'>Тарифы</li>
              <li className='cursor'>FAQ</li>
            </ul>
          </nav>


          <AccountPanel />




        </div>
      </div>
    </div>
  );
}

export default Header;
