import './style.scss';
import ParametersCheckbox from './ParametersCheckbox';
import ParametersInput from './ParametersInput';
import UseSearchPage from '../../hooks/UseSearchPage';


function SearchPage() {

  const {
    inn,
    setInn,
    setTonality,
    numDocuments,
    setNumDocuments,
    dateStart,
    setStartDate,
    dateEnd,
    setEndDate,
    innError,
    numDocError,
    dateError,
    inputInnRef,
    inputNumDocRef,
    inputStartDateRef,
    inputEndDateRef,
    onSubmitSearch
  } = UseSearchPage();

  const isSubmit = !inn.length || !numDocuments.length || !dateStart.length || !dateEnd.length;

  return (
    <div className='search-page'>
      <div className='container'>
        <div className='search-page__wrap'>
          <div className='search-page__tittle'>
            <div>
              <h2>Найдите необходимые данные в пару кликов.</h2>
              <p className='search-page_des'>
                Задайте параметры поиска.
              </p>

              <p className='search-page_des'>
                Чем больше заполните, тем точнее поиск
              </p>
            </div>

            <div>
              <img className='search-page__tittle-img-doc' src="images/search-page/document.png" alt="" />
              <img className='search-page__tittle-img-fol' src="images/search-page/folders.png" alt="" />
            </div>
          </div>
          <div className='search-page__form'>
            <form onSubmit={onSubmitSearch}>
              <div className='search-page__parameters'>
                <ParametersInput {...
                  {
                    inn,
                    setInn,
                    setTonality,
                    numDocuments,
                    setNumDocuments,
                    setStartDate,
                    setEndDate,
                    innError,
                    numDocError,
                    dateError,
                    inputInnRef,
                    inputNumDocRef,
                    inputStartDateRef,
                    inputEndDateRef,
                  }} />
                <ParametersCheckbox />
              </div>
              <div className='form-btn'>
                {isSubmit ?
                  <>
                    <button disabled type='submit'>Войти</button>
                    <p>* Обязательные к заполнению поля</p>
                  </>
                  :
                  <>
                    <button type='submit' className='cursor hover form-btn-active'>Войти</button>
                    <p>* Обязательные к заполнению поля</p>
                  </>
                }
              </div>
            </form>
            <img className='search-page__form-img' src="images/search-page/search-page-img.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchPage