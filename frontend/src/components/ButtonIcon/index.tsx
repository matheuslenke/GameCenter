import React, { FunctionComponent, ReactNode } from 'react';

import {
  View,
  Text
} from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg';

import { styles } from './styles';

type Props = RectButtonProps & {
  title: string;
  icon: React.FC<SvgProps>;
  buttonType: 'discord' | 'twitch' | 'other'
}

export function ButtonIcon({title, icon: Icon, buttonType, ...rest}: Props){
  let buttonStyle = styles.buttonOther;
  let titleStyle = styles.titleOther;
  switch (buttonType) {
    case 'discord':
      buttonStyle = styles.buttonDiscord
      titleStyle = styles.titleDiscord
      break;
    case 'twitch':
      buttonStyle = styles.buttonTwitch
      titleStyle = styles.titleTwitch
      break;
    default:
      break;
  }

  return (
    <View>
      <RectButton 
        style={[
          styles.container,
          buttonStyle,
        ]}
        {...rest}
      >
        <View style={styles.iconWrapper}>
            <Icon 
              width={32} 
              height={32}
            />
        </View>

        <Text style={titleStyle}>
          {title}
        </Text>
      </RectButton>
    </View>
  );
}