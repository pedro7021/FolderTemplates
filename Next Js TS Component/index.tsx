import * as Styled from './styles';

export type <ComponentName>Props = {
  title?: string;
};

export function <ComponentName>({ title = 'Exemplo' }: <ComponentName>Props) {
  return (
    <Styled.Wrapper>
      <h1>{title}</h1>
    </Styled.Wrapper>
  );
}
