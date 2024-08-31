import { Link, useNavigate } from 'react-router-dom'
import { persistor } from '../../store/store';
import { useAppSelector } from '../../store/types';

import BurgerMenu from './burgerMenu';
import './style.scss';


function AccountPanel() {
  const authStatus = useAppSelector((state) => state.scan['auth-status']);
  const info = useAppSelector((state) => state.scan.info?.eventFiltersInfo);
  const navigate = useNavigate();

  const signOut = () => {
    persistor.purge();
    navigate('/');
  }

  return (
    <div>
      {authStatus === null &&
        <div className='auth'>
          <button className='auth__sign-up cursor'>
            Зарегистрироваться
          </button>
          <div className='auth__line'></div>
          <Link to={'/signin'}>
            <button className='auth__sign-in cursor hover'>Войти</button>
          </Link>
        </div>
      }

      <div className='user'>

        {(authStatus !== null) &&
          <div className='user__info'>
            {authStatus === 'loading' &&
              <div className='user__loader'>
                <img src="/images/icons/spinner.svg" alt="" />
              </div>
            }

            {authStatus === 'loaded' &&
              <div className='user__info_tablo'>
                <div>
                  <p>Использовано компаний</p>
                  <span>{info.usedCompanyCount}</span>
                </div>

                <div>
                  <p>Лимит по компаниям</p>
                  <span className='tablo-num-two'>{info.companyLimit}</span>
                </div>
              </div>
            }
          </div>
        }

        {authStatus === 'loaded' &&
          <div className='user__panel'>
            <div>
              <p>Алексей А.</p>
              <button
                onClick={signOut}
                className='cursor'>Выйти</button>
            </div>
            <div className='user__panel_img'>
              <img src="/images/icons/ava.svg" alt="ava" />
            </div>
          </div>
        }

        <BurgerMenu />


      </div>
    </div>
  );
}

export default AccountPanel;
