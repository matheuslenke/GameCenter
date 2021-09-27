import React from 'react';

import {
  View,
  Image,
  Text
} from 'react-native';

import { styles } from './styles';

import WindowsLogo from '../../assets/img/platforms/windows.svg';
import XBOXLogo from '../../assets/img/platforms/xbox.svg';
import PlayStationLogo from '../../assets/img/platforms/playstation.svg';
import SwitchLogo from '../../assets/img/platforms/nintendoswitch.svg';
import MacLogo from '../../assets/img/platforms/apple.svg';
import Nintendo from '../../assets/img/platforms/nintendo.svg';
import Sega from '../../assets/img/platforms/sega.svg';
import Android from '../../assets/img/platforms/android.svg';
import { reducedPlatforms } from '../../utils/platforms';

type Props = {
  platform: string;
}

export function PlatformLogo({ platform }: Props){

  switch(Number(platform)) {
    case reducedPlatforms.PC:
      return (
        <WindowsLogo width={25} height={25} />
      )
    case reducedPlatforms.MAC:
      return (
        <MacLogo width={25} height={25} />
      )
    case reducedPlatforms.SEGA:
      return (
        <Sega width={50} height={25} />
      )
    case reducedPlatforms.XBOX:
      return (
        <XBOXLogo width={25} height={25} />
      )
    case reducedPlatforms.PLAYSTATION:
      return (
        <PlayStationLogo width={30} height={30} />
      )
    case reducedPlatforms.NINTENDOSWITCH:
      return (
        <SwitchLogo width={25} height={25} />
      )
    case reducedPlatforms.NINTENDO:
      return(
        <Nintendo width={70} height={25} />
      )
    case reducedPlatforms.ANDROID:
      return(
        <Android width={25} height={25} />
      )
    default:
      return (
        <View/>
      )
  }
}