import { useEffect, useState } from 'react';
import { getDocuments } from '../../store/extraReducers';
import { useAppDispatch, useAppSelector } from '../../store/types';
import { TPublications } from '../../types';
import OneDocument from './Document';
import './style.scss';


function SearchResult() {
  const [partDocuments, setPartDocuments] = useState([]);
  const [slidersPub, setSlidersPub] = useState<TPublications[]>([]);


  const publications = useAppSelector((state) => state.scan.publications);
  const idDocuments = useAppSelector((state) => state.scan['id-documents']);
  const documents = useAppSelector((state) => state.scan.documents);

  const [amount, setAmount] = useState(20);
  const [isPublications, setIsPublications] = useState(false);



  const dispatch = useAppDispatch();


  const getMore = () => {
    if (Array.isArray(documents)) {
      setAmount(amount + 10);
      setPartDocuments(documents.slice(0, amount));
    }
  };

  const sliderBtnLeft = () => {
    if (Array.isArray(publications)) {
      let el = slidersPub.slice(-1);
      let arr = slidersPub.slice(0, -1);
      setSlidersPub(el.concat(arr));
    }
  };

  const sliderBtnRight = () => {
    if (Array.isArray(publications)) {
      let el = slidersPub.slice(0, 1);
      let arr = slidersPub.slice(1);
      setSlidersPub(arr.concat(el));
    }
  }

  useEffect(() => {
    if (idDocuments != null) {
      dispatch(getDocuments(idDocuments))

    }
  }, [idDocuments, dispatch])

  useEffect(() => {
    if (Array.isArray(documents)) {
      setPartDocuments(documents.slice(0, 10));
    }

    if (Array.isArray(publications)) {
      (async () => {
        await setSlidersPub(publications);
        await setIsPublications(true)
      })()
    }
  }, [documents, publications])


  return (
    <div className='search-result'>
      <div className='container'>
        <div className='search-result__wrap'>
          <div className='search-result__tittle'>
            <div>
              <h2>Ищем. Скоро будут результаты</h2>
              <p className='search-result_des'>
                Поиск может занять некоторое время,
              </p>
              <p className='search-page_des'>
                просим сохранять терпение.
              </p>
            </div>

            <div>
              <img className='search-result__tittle-img' src="images/search-result/main.png" alt="" />
            </div>
          </div>

          <div className="search-result__summary">
            <h3 className='search-result-title'>Общая сводка</h3>
            <span>Найдено {publications?.length} вариантов</span>
            <div className='search-result__table'>
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
              <div className='table__wrap'>
                <div className='table-title__wrap'>
                  <span>Период</span>
                  <span>Всего</span>
                  <span>Риски</span>
                </div>
                <div className='table-title__value'>
                  {isPublications ?
                    <>
                      {slidersPub?.map((pub, i) => (
                        <div key={i}>
                          <span>
                            {`${new Date(pub.date as string).getDay()}.${new Date(pub.date as string).getMonth()}.${new Date(pub.date as string).getFullYear()}`}
                          </span>
                          <span>{pub['total-documents']}</span>
                          <span>{pub['risk-factors']}</span>
                        </div>
                      ))}
                    </>
                    :
                    <div className='user__loader'>
                      <img src="/images/icons/spinner.svg" alt="" />
                    </div>
                  }

                </div>
              </div>

            </div>
          </div>

          <div className="search-result__list-of-documents">
            <h3 className='search-result-title list-of-documents_title'>Список документов</h3>
            <div className='list-of-documents'>
              {partDocuments?.map((document, i) => (
                <OneDocument key={i} document={document} />
              ))}
            </div>
          </div>

          <div className='list-of-documents_more'>
            <button
              onClick={getMore}
              className='hover cursor'>
              Показать больше
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
