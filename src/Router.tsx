import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Canvas from './canvas';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/canvas" element={<Canvas />} />
      </Routes>
    </BrowserRouter>
  );
}
