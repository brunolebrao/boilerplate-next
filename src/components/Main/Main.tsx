import * as S from './styles'

const Main = ({
  title = 'Boilerplate',
  description = 'TypeScript, ReactJS, NextJS and Styled Components'
}) => (
  <S.Container>
    <S.Logo src="/img/logo.svg" alt="logo" />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration src="/img/hero-illustration.svg" alt="People" />
  </S.Container>
)

export default Main
