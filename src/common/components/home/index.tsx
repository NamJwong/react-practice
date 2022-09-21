import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Hello 주영이의 React World</h1>
      <h2>boolean type prop의 optional 여부에 따른 사용성 테스트</h2>
      <button onClick={() => navigate('/boolean-type-prop-optional')} />
      <h2>너가소개서 이미지 저장 기능 구현 연습</h2>
      <button onClick={() => navigate('/dom-to-image-file-saver')}>
        dom-to-image + file-saver 활용
      </button>
    </div>
  );
}
