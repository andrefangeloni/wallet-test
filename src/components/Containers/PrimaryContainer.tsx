import React from 'react';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';

import { CustomHeader, SecondaryHeader } from '../../components';

import { useAppTranslation } from '../../hooks';

import * as S from './styles';

type Props = {
  animated?: boolean;
  noOverlay?: boolean;
  primaryHeader?: boolean;
  secondaryHeader?: boolean;
  children: React.ReactNode;
};

export const PrimaryContainer = ({
  animated,
  children,
  noOverlay,
  primaryHeader,
  secondaryHeader,
}: Props) => {
  const { translate } = useAppTranslation();

  const height = useSharedValue(230);

  const initAnimation = React.useCallback(() => {
    height.value = withSpring(height.value + 100);
  }, [height]);

  React.useEffect(() => {
    if (animated) {
      setTimeout(() => {
        initAnimation();
      }, 500);
    }
  }, [animated, initAnimation]);

  return (
    <S.Container>
      {noOverlay ? null : (
        <>
          <Animated.View style={{ ...S.styles.overlayTop, height }} />
          <Animated.View style={{ ...S.styles.overlayBottom, height }} />
        </>
      )}

      {primaryHeader ? (
        <S.HeaderWrapper>
          <CustomHeader title={translate('registration')} />
        </S.HeaderWrapper>
      ) : null}

      {secondaryHeader ? <SecondaryHeader /> : null}

      <S.Main>{children}</S.Main>
    </S.Container>
  );
};
