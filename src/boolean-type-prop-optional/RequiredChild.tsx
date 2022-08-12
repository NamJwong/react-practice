import * as S from './style';

interface RequiredChildProps {
  isRed: boolean;
  content: string;
}

export default function RequiredChild(props: RequiredChildProps) {
  const { isRed, content } = props;
  console.log(content, isRed);
  return <S.Container isRed={isRed}>{content}</S.Container>;
}
