import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DownNav from './components/NavBar/DownNav';
import UpperNav from './components/NavBar/UpperNav';
import GlobalStyles from './GlobalStyles';
import Main from './pages/Main';

const Routers = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <UpperNav />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <DownNav />
    </BrowserRouter>
  );
};

export default Routers;
