import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../store/types';
import './style.scss';


function Home() {
  const authStatus = useAppSelector((state) => state.scan['auth-status']);

  return (
    <div className='home'>
      <div className="container">
        <div className="home__wrap">
          <div className='home__title'>
            <h1>
              сервис по поиску <br />
              публикаций <br />
              о компании <br />
              по его ИНН
            </h1>
            <p>Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.</p>
            {authStatus != null &&
              <Link to={'/search-page'}>
                <button className='cursor hover'>
                  Запросить данные
                </button>
              </Link>


            }
          </div>
          <div className='home__img'>
            <img src="/images/home-img.png" alt="home" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
