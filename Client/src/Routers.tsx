import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UpperNav from './components/NavBar/UpperNav';
import GlobalStyles from './GlobalStyles';
import Main from './pages/Main';

const Routers = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <UpperNav></UpperNav>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
