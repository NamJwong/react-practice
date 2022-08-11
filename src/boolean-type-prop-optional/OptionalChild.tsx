import * as S from './style';

interface OptionalChildProps {
  isRed?: boolean;
  content: string;
}

export default function OptionalChild(props: OptionalChildProps) {
  const { isRed = false, content } = props;
  console.log(content, isRed);
  return <S.Container isRed={isRed}>{content}</S.Container>;
}
