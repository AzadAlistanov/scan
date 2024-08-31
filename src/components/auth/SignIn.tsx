import { SyntheticEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { fetchAuth, fetchUserInfo } from "../../store/extraReducers";
import { useAppDispatch, useAppSelector } from "../../store/types";
import './style.scss';


function SignIn() {
  const navigate = useNavigate();
  const [value, setValue] = useState({
    login: '',
    password: ''
  });

  const dispatch = useAppDispatch();
  const authStatus = useAppSelector((state) => state.scan['auth-status']);


  const onSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    await dispatch(fetchAuth(value));
  };

  useEffect(() => {
    if (authStatus === 'loaded') {
      (async () => {
        await dispatch(fetchUserInfo());
        navigate('/')
      })()
    }
  }, [authStatus])

  return (
    <div className="sign-in">
      <div className="container">
        <div className="sign-in__wrap">

          <div className="sign-in__title">
            <p>Для оформления подписки <br />
              на тариф, необходимо авторизоваться.</p>
          </div>
          <div className="form">
            <div className="sign-links">
              <Link className="auth-link-active" to={'/signin'}>Войти</Link>
              <Link to={'/signin'}>Зарегистрироваться</Link>
            </div>
            <form onSubmit={onSubmit} className='sign-in__form'>
              <span>Логин или номер телефона:</span>
              <input
                value={value.login}
                onChange={(event) => setValue({ ...value, login: event.target.value })}
                type='text'
                className='auth-login' />
              <span>Пароль:</span>
              <input
                value={value.password}
                onChange={(event) => setValue({ ...value, password: event.target.value })}
                type='password'
                className='auth-password' />
              {value.login.length === 0 || value.password.length === 0 ?
                <button disabled type='submit' className='auth-btn'>Войти</button>
                :
                <button type='submit' className='auth-btn cursor hover auth-btn-active'>Войти</button>
              }

              <Link to={'/signin'}>Восстановить пароль</Link>
              <span>Войти через:</span>
              <div className="auth-message__wrap">
                <img src="/images/sign-in/google.png" alt="google" />
                <img src="/images/sign-in/facebook.png" alt="facebook" />
                <img src="/images/sign-in/yandex.png" alt="yandex" />

              </div>
            </form>
          </div>
          <img className="sign-in__title-img" src="/images/sign-in/sign-in-img.png" alt="people" />

        </div>
      </div>
    </div>
  );
}

export default SignIn