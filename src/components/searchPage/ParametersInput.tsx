import { TPropsParametersInput } from "../../types"


function ParametersInput({
  inn,
  setInn,
  setTonality,
  numDocuments,
  setNumDocuments,
  setStartDate,
  setEndDate,
  inputInnRef,
  inputNumDocRef,
  inputStartDateRef,
  inputEndDateRef,
  innError,
  numDocError,
  dateError,
}: TPropsParametersInput) {

  return (
    <div className='parameters__inputs'>
      <p>ИНН компании*</p>
      <input
        value={inn}
        onChange={(e) => setInn(e.target.value)}
        className='parameters-input input-inn'
        ref={inputInnRef}
        type="text"
        placeholder="10 цифр"
      />
      <span className="inn-error">{innError}</span>
      <p>Тональность</p>
      <select
        onChange={(e) => setTonality(e.target.value)}
        className='parameters-input parameter-select'>
        <option value="any">любая</option>
        <option value="positive">позитивная</option>
        <option value="negative">негативная</option>
      </select>
      <p>Количество документов в выдаче*</p>
      <input
        value={numDocuments}
        onChange={(e) => setNumDocuments(e.target.value)}
        ref={inputNumDocRef}
        className='parameters-input'
        type="text"
        placeholder="От 1 до 1000"
      />
      <span className="inn-error">{numDocError}</span>

      <div className='search-range'>
        <p>Диапазон поиска*</p>
        <div>
          <input
            onChange={(e) => setStartDate(e.target.value)}
            ref={inputStartDateRef}
            className='parameters-input parameter-date start-date'
            placeholder="Дата начала"
            type="date" />
          <input
            onChange={(e) => setEndDate(e.target.value)}
            ref={inputEndDateRef}
            className='parameters-input parameter-date end-date'
            placeholder="Дата конца"
            type="date" />
        </div>
        <span className="inn-error">{dateError}</span>
      </div>

    </div>
  )
}

export default ParametersInput