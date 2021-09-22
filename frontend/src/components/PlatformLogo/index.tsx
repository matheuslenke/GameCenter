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
import Nintendo from '../../assets/img/platforms/nintendo.svg';
import { platforms } from '../../utils/platforms';

type Props = {
  platform: number;
}

export function PlatformLogo({ platform }: Props){
  /*
  VR: 162,
  STEAMVR: 163,

  NINTENDOSWITCH: 130,
  NINTENDODSI: 159,
  NINTENDO64: 4,
  NINTENDO3DS: 37,
  NINTENDODS: 20,
*/


  switch(platform) {
    case platforms.PC:
      return (
        <WindowsLogo width={25} height={25} />
      )
    case platforms.MAC || platforms.IOS:
    return (
      <MacLogo width={25} height={25} />
    )
    case platforms.XBOXONE || platforms.XBOXSERIESSX || platforms.XBOX360:
      return (
          <XBOXLogo width={25} height={25} />
      )
    case platforms.PS || platforms.PS2 || platforms.PS3 || platforms.PS4 || platforms.PS5 || platforms.PSVR || platforms.PSP:
      return (
        <PlayStationLogo width={30} height={30} />
      )
    case platforms.NINTENDOSWITCH:
    return (
      <SwitchLogo width={25} height={25} />
    )
    case platforms.NINTENDO3DS || platforms.NINTENDODSI || platforms.NINTENDO64 || platforms.NINTENDODS:
    return(
      <View style={{flex: 1, }}>
        <Nintendo width={60} height={25}/>

      </View>
    )
    default:
      return (
        <View />
      )
  }
}