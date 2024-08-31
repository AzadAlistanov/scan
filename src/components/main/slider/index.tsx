import { useState } from 'react';
import { TSlider } from '../../../types';
import './style.scss';

let arrSlider = [
  {
    img: '/images/slider/slider-time.png',
    text: 'Высокая и оперативная скорость обработки заявки'
  },
  {
    img: '/images/slider/slider-base.png',
    text: 'Огромная комплексная база данных, обеспечивающая объективный ответ на запрос'
  },
  {
    img: '/images/slider/slider-security.png',
    text: 'Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству'
  },
  {
    img: '/images/slider/slider-time.png',
    text: 'Высокая и оперативная скорость обработки заявки'
  },
  {
    img: '/images/slider/slider-base.png',
    text: 'Огромная комплексная база данных, обеспечивающая объективный ответ на запрос'
  },
]

function Slider() {
  const [sliders, setSliders] = useState<TSlider[]>(arrSlider);


  const sliderBtnLeft = () => {
    let el = sliders.slice(-1);
    let arr = sliders.slice(0, -1);
    setSliders(el.concat(arr));
  }

  const sliderBtnRight = () => {
    let el = sliders.slice(0, 1);
    let arr = sliders.slice(1);
    setSliders(arr.concat(el));
  }



  return (
    <div className='slider'>
      <div className="container">
        <div className='slider__wrap'>
          <h2>Почему именно мы</h2>
          <button
            onClick={sliderBtnLeft}
            className='slider_btn-left slider-btn cursor hover'>
            <img src="/images/icons/slider-left.png" alt="slider-left" />
          </button>
          <button
            onClick={sliderBtnRight}
            className='slider_btn-right slider-btn cursor hover'>
            <img src="/images/icons/slider-right.png" alt="slider-right" />
          </button>

          <div className="slider__block">
            {sliders.map((slider, i) =>
              <div key={i} className="slider__item">
                <img src={slider.img} alt="" />
                <p>{slider.text}</p>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
