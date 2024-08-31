import { RefObject, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { persistor } from '../../store/store';
import { useAppSelector } from '../../store/types';


function BurgerMenu() {
  const burgerRefOpen = useRef() as RefObject<HTMLDivElement> | null;
  const burgerRefClose = useRef() as RefObject<HTMLDivElement> | null;
  const authStatus = useAppSelector((state) => state.scan['auth-status']);
  const navigate = useNavigate();


  const burgerMenuOpen = () => {
    if (burgerRefOpen?.current && burgerRefClose?.current) {
      burgerRefClose.current.style.display = 'block';
      burgerRefOpen.current.style.display = 'none';

    }
  }

  const burgerMenuClose = () => {
    if (burgerRefOpen?.current && burgerRefClose?.current) {
      burgerRefOpen.current.style.display = 'block';
      burgerRefClose.current.style.display = 'none';
    }
  }

  const signOut = () => {
    persistor.purge();
    navigate('/');
  }

  return (
    <>
      <div
        ref={burgerRefOpen}
        onClick={burgerMenuOpen}
        className='burger-btn cursor'>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div
        ref={burgerRefClose}
        className='burger-close'>

        <div className='burger-close-menu'>

          <div className='burger-menu_header'>
            <img className='cursor header__logo' src="/images/logo-footer.png" alt="" />

            <img
              onClick={burgerMenuClose}
              className='cursor'
              src="/images/icons/burger-close.png" alt="" />
          </div>

          <div className='burger-menu_nav'>

            <ul>
              <li className='cursor'>Главная</li>
              <li className='cursor'>Тарифы</li>
              <li className='cursor'>FAQ</li>
            </ul>

            {authStatus === null &&
              <>
                <button className='auth__sign-up cursor'>
                  Зарегистрироваться
                </button>
                <Link className='auth__sign-in-link' to={'/signin'}>
                  <button
                    onClick={burgerMenuClose}
                    className='auth__sign-in cursor hover'>
                    Войти
                  </button>
                </Link>
              </>
            }

            {authStatus != null &&
              <div className='auth__sign-in-link hover'>
                <button
                  onClick={signOut}
                  className='auth__sign-in cursor'>Выйти
                </button>
              </div>
            }

          </div>
        </div>
      </div>
    </>
  )
}


export default BurgerMenu