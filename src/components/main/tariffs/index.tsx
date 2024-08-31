import { useState } from 'react';
import './style.scss';


function Tariffs() {
  const [isAuth] = useState(true);

  return (
    <div className='tariffs'>
      <div className="container">
        <h2>наши тарифы</h2>
        <div className='tariffs__wrap'>

          <div className='tariffs__item tariff-beginner'>
            <div className='tariffs__header'>
              <div>
                <h3 className='tariffs__title'>Beginner</h3>
                <div className="tariffs__assignment">Для небольшого исследования</div>
              </div>
              <img src="/images/tariffs/lamp.png" alt="lamp" />
            </div>

            <div className='tariffs__discription_wrap'>
              {isAuth ?
                <button className='current-tariff'>Текущий тариф</button>
                : null
              }
              <div className='tariff_price'>
                <p>
                  1 299 ₽
                  <span>2 600 ₽</span>
                </p>
                <p>или 279 ₽/мес. при рассрочке на 24 мес.</p>
              </div>

              <p className='tariff-includes'>В тариф входит:</p>
              <ul>
                <li>Все пункты тарифа Beginner</li>
                <li>Экспорт истории</li>
                <li>Рекомендации по приоритетам</li>

              </ul>

              <div className='tariffs_btns'>
                {isAuth ?
                  <button className='per-acc-btn cursor hover'>Перейти в личный кабинет</button>
                  :
                  <button className='go-to-btn cursor hover'>Подробнее</button>
                }
              </div>
            </div>
          </div>


          <div className='tariffs__item tariff-pro'>
            <div className='tariffs__header'>
              <div>
                <h3 className='tariffs__title'>Pro</h3>
                <div className="tariffs__assignment">Для HR и фрилансеров</div>
              </div>
              <img src="/images/tariffs/arrow.png" alt="arrow" />
            </div>
            <div className='tariffs__discription_wrap'>
              {!isAuth ?
                <button className='current-tariff cursor'>Текущий тариф</button>
                : null
              }
              <div className='tariff_price'>
                <p>
                  2 379 ₽
                  <span>3 700 ₽</span>
                </p>
                <p>или 150 ₽/мес. при рассрочке на 24 мес.</p>
              </div>

              <p className='tariff-includes'>В тариф входит:</p>
              <ul>
                <li>Все пункты тарифа Pro</li>
                <li>Безлимитное количество запросов</li>
                <li>Приоритетная поддержка</li>
              </ul>

              <div className='tariffs_btns'>
                <button className='go-to-btn cursor hover'>Подробнее</button>
              </div>
            </div>
          </div>

          <div className='tariffs__item tariff-business'>
            <div className='tariffs__header'>
              <div>
                <h3 className='tariffs__title'>Business</h3>
                <div className="tariffs__assignment">Для корпоративных клиентов</div>
              </div>
              <img src="/images/tariffs/laptop.png" alt="laptop" />
            </div>
            <div className='tariffs__discription_wrap'>
              {!isAuth ?
                <button className='current-tariff'>Текущий тариф</button>
                : null
              }
              <div className='tariff_price'>
                <p>
                  799 ₽
                  <span>1 200 ₽</span>
                </p>
                <p>или 150 ₽/мес. при рассрочке на 24 мес.</p>
              </div>

              <p className='tariff-includes'>В тариф входит:</p>
              <ul>
                <li>Безлимитная история запросов</li>
                <li>Безопасная сделка</li>
                <li>Поддержка 24/7</li>

              </ul>

              <div className='tariffs_btns'>
                <button className='go-to-btn cursor hover'>Подробнее</button>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}

export default Tariffs;
