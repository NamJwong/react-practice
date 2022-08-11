import BooleanTypePropOptional from 'boolean-type-prop-optional';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/boolean-type-prop-optional" element={<BooleanTypePropOptional />} />
      </Routes>
    </BrowserRouter>
  );
}
