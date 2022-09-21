import { Result } from './Result';
import domtoimage from 'dom-to-image';
import { useRef } from 'react';
import { saveAs } from 'file-saver';

export default function DomToImageFileSaver() {
  const resultRef = useRef<HTMLInputElement>(null);
  const download = () => {
    domtoimage.toBlob(resultRef.current as Node).then((blob) => {
      saveAs(blob, 'card.png');
    });
  };
  return (
    <>
      <h2 style={{ fontSize: '100px', marginBottom: '50px' }}>다운로드 할 이미지</h2>
      <Result ref={resultRef} />
      <button onClick={download} style={{ fontSize: '100px', marginTop: '50px' }}>
        다운로드 버튼이어요
      </button>
    </>
  );
}
