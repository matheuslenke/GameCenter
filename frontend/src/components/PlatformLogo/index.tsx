import React from 'react';

import {
  View,
  Image
} from 'react-native';

import { styles } from './styles';

import WindowsLogo from '../../assets/img/platforms/windows.svg';
import XBOXLogo from '../../assets/img/platforms/xbox.svg';
import PlayStationLogo from '../../assets/img/platforms/playstation.svg';
import SwitchLogo from '../../assets/img/platforms/nintendoswitch.svg';
import MacLogo from '../../assets/img/platforms/apple.svg';
import { platforms } from '../../utils/platforms';

type Props = {
  platform: string;
}

export function PlatformLogo({ platform }: Props){
  switch(Number(platform)) {
    case platforms.PC:
      return (
        <WindowsLogo width={25} height={25} />
      )
    case platforms.MAC:
    return (
      <MacLogo width={25} height={25} />
    )
    case platforms.XBOXONE || platforms.XBOXSERIESSX:
      return (
          <XBOXLogo width={25} height={25} />
      )
    case platforms.PS4 || platforms.PS5:
      return (
        <PlayStationLogo width={30} height={30} />
      )
    case platforms.NINTENDOSWITCH:
    return (
      <SwitchLogo width={25} height={25} />
    )
    default:
      return (
        <View />
      )
  }
}