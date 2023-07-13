
  export interface SpritesMap {
    'icon': "Sort";
  }

  export const SPRITES_META: { [K in keyof SpritesMap]: SpritesMap[K][]; } = {
    'icon': ["Sort"]
  };
  