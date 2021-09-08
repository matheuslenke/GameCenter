import React, { FunctionComponent, ReactNode } from 'react';

import {
  Image,
  ImageProps,
  View,
  Text
} from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg';

import { styles } from './styles';

type Props = RectButtonProps & {
  title: string;
  icon: React.FC<SvgProps>;
  buttonType: 'discord' | 'other'
}

export function ButtonIcon({title, icon: Icon, buttonType, ...rest}: Props){
  return (
    <View>
      <RectButton 
        style={[
          styles.container,
          buttonType === 'discord' ? styles.buttonDiscord : styles.buttonOther
        ]}
        {...rest}
      >
        <View style={styles.iconWrapper}>
            <Icon 
              width={32} 
              height={32}
            />
        </View>

        <Text style={buttonType === 'discord' ? styles.titleDiscord : styles.titleOther}>
          {title}
        </Text>
      </RectButton>
    </View>
  );
}