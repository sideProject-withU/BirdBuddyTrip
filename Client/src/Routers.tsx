import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Modal from './components/Modal/Modal';
import DownNav from './components/NavBar/DownNav';
import UpperNav from './components/NavBar/UpperNav';
import GlobalStyles from './GlobalStyles';
import ChatList from './pages/ChatList';
import Main from './pages/Main';
import MakePost from './pages/MakePost';
import Mypage from './pages/Mypage';

const Routers = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Modal />
      <UpperNav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/main" element={<Main />} />
        <Route path="/chatlist" element={<ChatList />} />
        <Route path="/makepost" element={<MakePost />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
      <DownNav />
    </BrowserRouter>
  );
};

export default Routers;
