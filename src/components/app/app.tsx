import {AppRoute} from '../../service/const';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MainPage from '../main-page/main-page';

function App():JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<MainPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
