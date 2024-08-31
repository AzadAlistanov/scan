

function ParametersCheckbox() {

  return (
    <div className='parameters__checkbox'>
      <div>
        <input
          className="hover"
          type="checkbox"
        /><span>Признак максимальной полноты</span>
      </div>
      <div>
        <input
          className="hover"
          type="checkbox"
        /><span>Упоминания в бизнес-контексте</span>
      </div>
      <div>
        <input
          className="hover"
          type="checkbox"
        /><span>Главная роль в публикации</span>
      </div>
      <div>
        <input
          disabled
          type="checkbox"
        /><span className="check-disabled">Публикации только с риск-факторами</span>
      </div>
      <div>
        <input
          disabled
          type="checkbox"
        /><span className="check-disabled">Включать технические новости рынков</span>
      </div>
      <div>
        <input
          className="hover"
          type="checkbox"
        /><span>Включать анонсы и календари</span>
      </div>
      <div>
        <input
          disabled
          type="checkbox"
        /><span className="check-disabled">Включать сводки новостей</span>
      </div>
    </div>
  )
}

export default ParametersCheckbox