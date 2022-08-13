import BooleanTypePropOptional from 'boolean-type-prop-optional';
import Canvas from 'canvas';
import Home from 'home';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/boolean-type-prop-optional" element={<BooleanTypePropOptional />} />
        <Route path="/canvas" element={<Canvas />} />
      </Routes>
    </BrowserRouter>
  );
}
