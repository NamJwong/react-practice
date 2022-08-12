import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Hello 주영이의 React World</h1>
      <button onClick={() => navigate('/boolean-type-prop-optional')}>
        boolean type prop의 optional 여부에 따른 사용성 테스트
      </button>
    </div>
  );
}
