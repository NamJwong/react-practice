import { default as formIcon } from 'common/assets/neogasogaeseo/form-icon.svg';
import { ReactComponent as Logo } from 'common/assets/neogasogaeseo/logo.svg';
import * as S from './style';

export default function Image() {
  const name = '주엉줭';
  const date = '2022-08-13';
  const question = '나와 함께하며 당신이\n 닮고 싶었던 능력이 있었나요?';
  const title = '너가 닮고 싶은 나의 일잘러 모습';
  const profileImage = 'https://i.pinimg.com/736x/51/5c/53/515c534fa39c838cbab9112e757af829.jpg';
  return (
    <S.Container>
      <div>
        <img src={profileImage} />
        <div>
          <div>{`${name}님의 너가소개서`}</div>
          <div>{date}</div>
        </div>
      </div>
      <S.Card>
        <img src={formIcon} />
        <div>{question}</div>
        <div>{title}</div>
        <div>
          <S.Circle />
          <hr />
          <S.Circle />
        </div>
        <Logo />
      </S.Card>
    </S.Container>
  );
}
