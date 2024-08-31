import { Routes, Route } from 'react-router-dom'
import { useAppSelector } from '../../store/types';
import SignIn from '../auth/SignIn';
import SearchPage from '../searchPage';
import SearchResult from '../searchResult';
import Home from './home';
import ImageBlock from './imagesBlock';
import Slider from './slider';
import Tariffs from './tariffs';


function Main() {
  const authStatus = useAppSelector((state) => state.scan['auth-status']);


  return (
    <main>
      <section>
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <Slider />
              <ImageBlock />
              <Tariffs />
            </>
          } />
          <Route path="/signin" element={<SignIn />} />
          {authStatus != null &&
            <>
              <Route path="/search-page" element={<SearchPage />} />
              <Route path="/search-result" element={<SearchResult />} />
            </>
          }

        </Routes>
      </section>
    </main>
  );
}

export default Main;