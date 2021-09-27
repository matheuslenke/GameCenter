import { GameData } from './../hooks/games';

export const platforms = {
  DREAMCAST: 23, //
  ATARI: 65,//
  PC: 6,
  SEGAGAMEGEAR: 35,
  GENESIS: 29,
  SMS: 64,
  LINUX: 3,
  PS: 7,
  PS2: 8,
  PS3: 9,
  PS4: 48,
  PS5: 167,
  PSVR: 165,
  PSP: 38,
  IOS: 39,
  VR: 162,
  STEAMVR: 163,
  XBOX: 11,
  XBOXONE: 49,
  XBOX360: 12,
  XBOXSERIESSX: 169,
  N64: 4,
  NES: 18,
  WII: 5,
  WIIU: 41,
  SNES: 19,
  GBOY: 33,
  GBA: 24,
  GAMECUBE: 21,
  NINTENDOSWITCH: 130,
  NEWNINTENDO3DS: 137,
  NINTENDODSI: 159,
  NINTENDO64: 4,
  NINTENDO3DS: 37,
  NINTENDODS: 20,
  MAC: 14,
  ANDROID: 34,
}

export const reducedPlatforms = {
  NINTENDO: 1,
  PC: 2,
  PLAYSTATION: 3,
  XBOX: 4,
  NINTENDOSWITCH: 5,
  SEGA: 6,
  MAC: 7,
  ANDROID: 8
}


export function filterPlatforms(platformsToFilter: GameData['platforms']) {
  let filteredPlatforms = []

  const hasPSPlatforms = platformsToFilter.findIndex(item => {
    return Number(item.id) == platforms.PS ||
          Number(item.id) == platforms.PS2 ||
          Number(item.id) == platforms.PS3 ||
          Number(item.id) == platforms.PS4 ||
          Number(item.id) == platforms.PS5 ||
          Number(item.id) == platforms.PSVR ||
          Number(item.id) == platforms.PS
  })
  if(hasPSPlatforms >= 0) {
    filteredPlatforms.push(reducedPlatforms.PLAYSTATION)
  }
    
  const hasNintendoPlatforms = platformsToFilter.findIndex(item => {
    return Number(item.id) === platforms.NINTENDO3DS ||
            Number(item.id) === platforms.NINTENDODSI ||
            Number(item.id) === platforms.NINTENDO64 || 
            Number(item.id) === platforms.NINTENDODS || 
            Number(item.id) === platforms.N64 ||
            Number(item.id) === platforms.GBA ||
            Number(item.id) === platforms.NES ||
            Number(item.id) === platforms.WII ||
            Number(item.id) === platforms.WIIU ||
            Number(item.id) === platforms.SNES ||
            Number(item.id) === platforms.GBOY ||
            Number(item.id) === platforms.NEWNINTENDO3DS ||
            Number(item.id) === platforms.GAMECUBE
  })
  if(hasNintendoPlatforms >= 0) {
    filteredPlatforms.push(reducedPlatforms.NINTENDO)
  }

  const hasXBOXPlatform = platformsToFilter.findIndex(item => {
    return Number(item.id) === platforms.XBOXONE ||
      Number(item.id) === platforms.XBOX360 ||
      Number(item.id) === platforms.XBOX
  })
  if(hasXBOXPlatform >= 0) {
    filteredPlatforms.push(reducedPlatforms.XBOX)
  }
  
  const hasNintendoSwitchPlatform = platformsToFilter.findIndex(item => Number(item.id) === platforms.NINTENDOSWITCH)
  if(hasNintendoSwitchPlatform >= 0) {
    filteredPlatforms.push(reducedPlatforms.NINTENDOSWITCH)
  }
  
  const hasMacPlatform = platformsToFilter.findIndex(item => Number(item.id) === platforms.MAC || Number(item.id) === platforms.IOS )
  if(hasMacPlatform >= 0) {
    filteredPlatforms.push(reducedPlatforms.MAC)
  }

  const hasPCPlatform = platformsToFilter.findIndex(item => Number(item.id) === platforms.PC)
  if(hasPCPlatform >= 0) {
    filteredPlatforms.push(reducedPlatforms.PC)
  }
  const hasSEGAPlatform = platformsToFilter.findIndex(item => Number(item.id) === platforms.SEGAGAMEGEAR || Number(item.id) === platforms.GENESIS )
  if(hasSEGAPlatform >= 0) {
    filteredPlatforms.push(reducedPlatforms.SEGA)
  }
  const hasAndroidPlatform = platformsToFilter.findIndex(item => Number(item.id) === platforms.ANDROID)
  if(hasAndroidPlatform >= 0) {
    filteredPlatforms.push(reducedPlatforms.ANDROID)
  }

  return filteredPlatforms
}