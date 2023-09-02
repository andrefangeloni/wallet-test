import { DefaultTheme } from 'styled-components';
import styled, { css } from 'styled-components/native';

type Props = {
  theme: DefaultTheme;
  top?: boolean;
};

export const Container = styled.View`
  flex: 1;
  padding: 0 24px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const HeaderWrapper = styled.View`
  margin-top: 16px;
`;

export const Main = styled.View`
  flex: 1;
`;

export const BackgroundAnimated = styled.View<Props>`
  position: absolute;
  height: 230px;
  width: 370px;
  opacity: 0.2;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  background-color: ${({ theme }) => theme.colors.backgroundOverlay};

  ${({ top }) =>
    top
      ? css`
          transform: rotate(-40deg);
          top: -70px;
          right: 120px;
        `
      : css`
          transform: rotate(140deg);
          bottom: -70px;
          left: 120px;
        `}
`;
