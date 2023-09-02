import { StyleSheet, ViewStyle } from 'react-native';
import styled from 'styled-components/native';

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

const sharedStyles: ViewStyle = {
  position: 'absolute',
  height: 230,
  width: 370,
  opacity: 0.2,
  borderBottomLeftRadius: 50,
  borderBottomRightRadius: 50,
  backgroundColor: '#eee',
};

export const styles = StyleSheet.create({
  overlayTop: {
    ...sharedStyles,
    top: -70,
    right: 120,
    transform: [{ rotate: '-40deg' }],
  },
  overlayBottom: {
    ...sharedStyles,
    bottom: -70,
    left: 120,
    transform: [{ rotate: '140deg' }],
  },
});
