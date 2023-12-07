import { createStitches } from '@stitches/react';
import {
  gray,
  mauve,
  slate,
  sage,
  sand,
  tomato,
  crimson,
  pink,
  purple,
  indigo,
  sky,
  mint,
  grass,
  yellow,
  amber,
  violetA,
  mauveA,
  violet,
  orange,
  brown,
  gold,
  grayA,
  sageA,
  slateA,
  sandA,
  tomatoA,
  pinkA,
  plumA,
  purpleA,
  indigoA,
  skyA,
  mintA,
  yellowA,
  amberA,
  orangeA,
  brownA,
  whiteA,
  blackA,
  sageDark,
  crimsonDark,
  plumDark,
  purpleDark,
  indigoDark,
  mintDark,
  grayDarkA,
  sageDarkA,
  sandDarkA,
  plumDarkA,
  purpleDarkA,
  indigoDarkA,
  mintDarkA,
} from '@radix-ui/colors';
import type * as Stitches from '@stitches/react';
export type { VariantProps } from '@stitches/react';

export const {
  styled,
  css,
  theme,
  createTheme,
  getCssText,
  globalCss,
  keyframes,
  config,
  reset,
} = createStitches({
  theme: {
    colors: {
      'background-primary-neutral': sage.sage1,
      'background-primary-hover': sage.sage3,
      'background-secondary-neutral': sage.sage3,
      'background-secondary-hover': sage.sage5,
      'background-tertiary-neutral': sage.sage5,
      'background-tertiary-hover': sage.sage7,
      'background-accent-neutral': sage.sage1,
      'background-accent-hover': sage.sage3,
      'background-ghost-neutral': 'transparent',
      'background-ghost-hover': sage.sage3,
      'background-mutedAccent': mint.mint2,
      'background-user': mint.mint6,
      'background-overlay': sageA.sageA8,
      'background-selection': mint.mint4,
      'border-primary': sage.sage5,
      'border-secondary': sage.sage6,
      'border-tertiary': sage.sage7,
      'border-accent': mint.mint1,
      'border-contrast': mint.mint10,
      'border-focus-base': mint.mint10,
      'border-focus-additive': mint.mint11,
      'shadow-default': sageA.sageA5,
      'shadow-secondary': sageA.sageA4,
      'text-primary': sage.sage12,
      'text-secondary': sage.sage11,
      'text-accent': sage.sage1,
      'text-accent-bright': sage.sage11,
      'text-contrast': sage.sage1,
      'hero-background': '#30A387',
      'background-cta': '#33A37D',
      'hero-radial': '#ADECAF',
      'hero-center-radial':
        'radial-gradient(circle at center, rgba(74,169,58,0.8), rgba(129,225,114,0))',
      ...gray,
      ...sage,
      ...purple,
      ...mint,
      ...indigo,
      ...sand,
      ...amber,
      ...orange,
      ...sage,
      ...grass,
      ...slate,
      ...gold,
      ...grayA,
      ...sageA,
      ...purpleA,
      ...mintA,
      ...indigoA,
      ...whiteA,
      ...blackA,
      ...sageA,
      ...crimson,
    },
    fonts: {
      untitled: 'Untitled Sans, -apple-system, system-ui, sans-serif',
      mono: 'Söhne Mono, menlo, monospace',
    },
    space: {
      1: '4px',
      2: '8px',
      3: '16px',
      4: '20px',
      5: '24px',
      6: '32px',
      7: '48px',
      8: '64px',
      9: '80px',
    },
    sizes: {
      1: '4px',
      2: '8px',
      3: '16px',
      4: '20px',
      5: '24px',
      6: '32px',
      7: '48px',
      8: '64px',
      9: '80px',
    },
    fontSizes: {
      1: '12px',
      2: '13px',
      3: '15px',
      4: '17px',
      5: '19px',
      6: '21px',
      7: '27px',
      8: '35px',
      9: '59px',
    },
    radii: {
      1: '4px',
      2: '6px',
      3: '8px',
      4: '12px',
      5: '20px',
      round: '50%',
      pill: '9999px',
    },
    zIndices: {
      1: '100',
      2: '200',
      3: '300',
      4: '400',
      max: '999',
    },
  },
  media: {
    phone: `(width < 720px)`,
    tablet: `(720px <= width < 1200px)`,
    desktop: `(1120px <= width)`,
  },
  utils: {
    p: (value: Stitches.PropertyValue<'padding'>) => ({
      padding: value,
    }),
    pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
    }),
    pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({
      paddingRight: value,
    }),
    pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({
      paddingBottom: value,
    }),
    pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
    }),
    px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    m: (value: Stitches.PropertyValue<'margin'>) => ({
      margin: value,
    }),
    mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
    }),
    mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
      marginRight: value,
    }),
    mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
      marginBottom: value,
    }),
    ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
    }),
    mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
      marginBottom: value,
    }),

    ta: (value: Stitches.PropertyValue<'textAlign'>) => ({ textAlign: value }),

    fd: (value: Stitches.PropertyValue<'flexDirection'>) => ({
      flexDirection: value,
    }),
    fw: (value: Stitches.PropertyValue<'flexWrap'>) => ({ flexWrap: value }),

    ai: (value: Stitches.PropertyValue<'alignItems'>) => ({
      alignItems: value,
    }),
    ac: (value: Stitches.PropertyValue<'alignContent'>) => ({
      alignContent: value,
    }),
    jc: (value: Stitches.PropertyValue<'justifyContent'>) => ({
      justifyContent: value,
    }),
    as: (value: Stitches.PropertyValue<'alignSelf'>) => ({ alignSelf: value }),
    fg: (value: Stitches.PropertyValue<'flexGrow'>) => ({ flexGrow: value }),
    fs: (value: Stitches.PropertyValue<'flexShrink'>) => ({
      flexShrink: value,
    }),
    fb: (value: Stitches.PropertyValue<'flexBasis'>) => ({ flexBasis: value }),

    bc: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
      backgroundColor: value,
    }),

    br: (value: Stitches.PropertyValue<'borderRadius'>) => ({
      borderRadius: value,
    }),
    btrr: (value: Stitches.PropertyValue<'borderTopRightRadius'>) => ({
      borderTopRightRadius: value,
    }),
    bbrr: (value: Stitches.PropertyValue<'borderBottomRightRadius'>) => ({
      borderBottomRightRadius: value,
    }),
    bblr: (value: Stitches.PropertyValue<'borderBottomLeftRadius'>) => ({
      borderBottomLeftRadius: value,
    }),
    btlr: (value: Stitches.PropertyValue<'borderTopLeftRadius'>) => ({
      borderTopLeftRadius: value,
    }),

    bs: (value: Stitches.PropertyValue<'boxShadow'>) => ({ boxShadow: value }),

    lh: (value: Stitches.PropertyValue<'lineHeight'>) => ({
      lineHeight: value,
    }),

    ox: (value: Stitches.PropertyValue<'overflowX'>) => ({ overflowX: value }),
    oy: (value: Stitches.PropertyValue<'overflowY'>) => ({ overflowY: value }),

    pe: (value: Stitches.PropertyValue<'pointerEvents'>) => ({
      pointerEvents: value,
    }),
    us: (value: Stitches.PropertyValue<'userSelect'>) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),

    userSelect: (value: Stitches.PropertyValue<'userSelect'>) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),

    size: (value: Stitches.PropertyValue<'width'>) => ({
      width: value,
      height: value,
    }),

    appearance: (value: Stitches.PropertyValue<'appearance'>) => ({
      WebkitAppearance: value,
      appearance: value,
    }),
    backgroundClip: (value: Stitches.PropertyValue<'backgroundClip'>) => ({
      WebkitBackgroundClip: value,
      backgroundClip: value,
    }),
  },
});

export type CSS = Stitches.CSS<typeof config>;

export const darkTheme = createTheme('dark-theme', {
  colors: {
    ...purpleDark,
    ...mintDark,
    ...indigoDark,
    ...sageDark,
    ...mintDark,
    ...mintDarkA,
    ...grayDarkA,
    ...sageDarkA,
    ...purpleDarkA,
    ...mintDarkA,
    ...indigoDarkA,
    ...crimsonDark,
    'background-primary-neutral': sageDark.sage1,
    'background-primary-hover': sageDark.sage3,
    'background-secondary-neutral': sageDark.sage3,
    'background-secondary-hover': sageDark.sage5,
    'background-tertiary-neutral': sageDark.sage5,
    'background-tertiary-hover': sageDark.sage7,
    'background-accent-neutral': mintDark.mint12,
    'background-accent-hover': mintDark.mint11,
    'background-ghost-neutral': 'transparent',
    'background-ghost-hover': sageDark.sage3,
    'background-mutedAccent': mintDark.mint2,
    'background-overlay': sageDarkA.sageA8,
    'border-primary': sageDark.sage5,
    'border-secondary': sageDark.sage6,
    'border-tertiary': sageDark.sage7,
    'border-accent': mintDark.mint12,
    'border-contrast': sageDark.sage10,
    'border-focus-base': mintDark.mint10,
    'border-focus-additive': mintDark.mint11,
    'shadow-default': sageDarkA.sageA2,
    'shadow-secondary': sageDarkA.sageA1,
    'text-primary': sageDark.sage1,
    'text-secondary': sageDark.sage11,
    'text-accent': mintDark.mint12,
    'text-accent-bright': mintDark.mint11,
    'text-contrast': sageDark.sage1,
    'hero-background': sageDark.sage1,
    'background-cta': '#33A37D',
    'hero-radial': '#ADECAF',
    'hero-center-radial':
      'radial-gradient(circle at center, rgba(74,169,58,0.8), rgba(129,225,114,0))',
    // Semantic colors
    hiContrast: '$slate12',
    loContrast: '$slate1',
    canvas: 'hsl(0 0% 15%)',
    panel: '$slate3',
    transparentPanel: 'hsl(0 100% 100% / 97%)',
    shadowLight: 'hsl(206 22% 7% / 35%)',
    shadowDark: 'hsl(206 22% 7% / 20%)',
    overlay: 'hsla(0,0%,0%,0.8)',
    commandModalBackground: 'rgba(22,22,22,0.3)',
  },
});

export const blueTheme = createTheme('blue-theme', {
  colors: {
    ...purpleDark,
    ...sky,
    ...indigoDark,
    ...slate,
    ...sky,
    ...skyA,
    ...grayDarkA,
    ...slateA,
    ...purpleDarkA,
    ...skyA,
    ...indigoDarkA,
    ...crimsonDark,
    'background-primary-neutral': slate.slate1,
    'background-primary-hover': slate.slate3,
    'background-secondary-neutral': slate.slate3,
    'background-secondary-hover': slate.slate5,
    'background-tertiary-neutral': slate.slate5,
    'background-tertiary-hover': slate.slate7,
    'background-accent-neutral': slate.slate1,
    'background-accent-hover': slate.slate3,
    'background-ghost-neutral': 'transparent',
    'background-ghost-hover': slate.slate3,
    'background-mutedAccent': sky.sky2,
    'background-user': sky.sky6,
    'background-overlay': slateA.slateA8,
    'background-selection': sky.sky4,
    'border-primary': slate.slate5,
    'border-secondary': slate.slate6,
    'border-tertiary': slate.slate7,
    'border-accent': sky.sky1,
    'border-contrast': sky.sky10,
    'border-focus-base': sky.sky10,
    'border-focus-additive': sky.sky11,
    'shadow-default': slateA.slateA5,
    'shadow-secondary': slateA.slateA4,
    'text-primary': slate.slate12,
    'text-secondary': slate.slate11,
    'text-accent': slate.slate1,
    'text-accent-bright': slate.slate11,
    'text-contrast': slate.slate1,
    'hero-background': indigo.indigo8,
    'background-cta': indigo.indigo10,
    'hero-radial': indigo.indigo6,
    'hero-center-radial': `radial-gradient(circle at center, ${skyA.skyA5} , ${indigoA.indigoA5})`,
  },
});

export const purpleTheme = createTheme('purple-theme', {
  colors: {
    ...purpleDark,
    ...violet,
    ...plumDark,
    ...mauve,
    ...violet,
    ...violetA,
    ...grayDarkA,
    ...mauveA,
    ...purpleDarkA,
    ...violetA,
    ...plumDarkA,
    ...crimsonDark,
    'background-primary-neutral': mauve.mauve1,
    'background-primary-hover': mauve.mauve3,
    'background-secondary-neutral': mauve.mauve3,
    'background-secondary-hover': mauve.mauve5,
    'background-tertiary-neutral': mauve.mauve5,
    'background-tertiary-hover': mauve.mauve7,
    'background-accent-neutral': mauve.mauve1,
    'background-accent-hover': mauve.mauve3,
    'background-ghost-neutral': 'transparent',
    'background-ghost-hover': mauve.mauve3,
    'background-mutedAccent': violet.violet2,
    'background-user': violet.violet6,
    'background-overlay': mauveA.mauveA8,
    'background-selection': violet.violet4,
    'border-primary': mauve.mauve5,
    'border-secondary': mauve.mauve6,
    'border-tertiary': mauve.mauve7,
    'border-accent': violet.violet1,
    'border-contrast': violet.violet10,
    'border-focus-base': violet.violet10,
    'border-focus-additive': violet.violet11,
    'shadow-default': mauveA.mauveA5,
    'shadow-secondary': mauveA.mauveA4,
    'text-primary': mauve.mauve12,
    'text-secondary': mauve.mauve11,
    'text-accent': mauve.mauve1,
    'text-accent-bright': mauve.mauve11,
    'text-contrast': mauve.mauve1,
    'hero-background': violet.violet8,
    'background-cta': violet.violet10,
    'hero-radial': violet.violet6,
    'hero-center-radial': `radial-gradient(circle at center, ${violetA.violetA6} , ${plumA.plumA5})`,
  },
});

export const orangeTheme = createTheme('orange-theme', {
  colors: {
    ...purpleDark,
    ...orange,
    ...plumDark,
    ...sand,
    ...orange,
    ...orangeA,
    ...grayDarkA,
    ...sandA,
    ...purpleDarkA,
    ...orangeA,
    ...plumDarkA,
    ...crimsonDark,
    'background-primary-neutral': sand.sand1,
    'background-primary-hover': sand.sand3,
    'background-secondary-neutral': sand.sand3,
    'background-secondary-hover': sand.sand5,
    'background-tertiary-neutral': sand.sand5,
    'background-tertiary-hover': sand.sand7,
    'background-accent-neutral': sand.sand1,
    'background-accent-hover': sand.sand3,
    'background-ghost-neutral': 'transparent',
    'background-ghost-hover': sand.sand3,
    'background-mutedAccent': orange.orange2,
    'background-user': orange.orange6,
    'background-overlay': sandA.sandA8,
    'background-selection': orange.orange4,
    'border-primary': sand.sand5,
    'border-secondary': sand.sand6,
    'border-tertiary': sand.sand7,
    'border-accent': orange.orange1,
    'border-contrast': orange.orange10,
    'border-focus-base': orange.orange10,
    'border-focus-additive': orange.orange11,
    'shadow-default': sandA.sandA5,
    'shadow-secondary': sandA.sandA4,
    'text-primary': sand.sand12,
    'text-secondary': sand.sand11,
    'text-accent': sand.sand1,
    'text-accent-bright': sand.sand11,
    'text-contrast': sand.sand1,
    'hero-background': orange.orange8,
    'background-cta': orange.orange10,
    'hero-radial': orange.orange6,
    'hero-center-radial': `radial-gradient(circle at center, ${orangeA.orangeA5} , ${amberA.amberA8})`,
  },
});

export const yellowTheme = createTheme('yellow-theme', {
  colors: {
    ...purpleDark,
    ...yellow,
    ...plumDark,
    ...sand,
    ...yellow,
    ...yellowA,
    ...grayDarkA,
    ...sandA,
    ...purpleDarkA,
    ...yellowA,
    ...plumDarkA,
    ...crimsonDark,
    'background-primary-neutral': sand.sand1,
    'background-primary-hover': sand.sand3,
    'background-secondary-neutral': sand.sand3,
    'background-secondary-hover': sand.sand5,
    'background-tertiary-neutral': sand.sand5,
    'background-tertiary-hover': sand.sand7,
    'background-accent-neutral': sand.sand1,
    'background-accent-hover': sand.sand3,
    'background-ghost-neutral': 'transparent',
    'background-ghost-hover': sand.sand3,
    'background-mutedAccent': yellow.yellow2,
    'background-user': yellow.yellow6,
    'background-overlay': sandA.sandA8,
    'background-selection': yellow.yellow4,
    'border-primary': sand.sand5,
    'border-secondary': sand.sand6,
    'border-tertiary': sand.sand7,
    'border-accent': yellow.yellow1,
    'border-contrast': yellow.yellow10,
    'border-focus-base': yellow.yellow10,
    'border-focus-additive': yellow.yellow11,
    'shadow-default': sandA.sandA5,
    'shadow-secondary': sandA.sandA4,
    'text-primary': sand.sand12,
    'text-secondary': sand.sand11,
    'text-accent': sand.sand1,
    'text-accent-bright': sand.sand11,
    'text-contrast': sand.sand1,
    'hero-background': yellow.yellow8,
    'background-cta': yellow.yellow10,
    'hero-radial': yellow.yellow6,
    'hero-center-radial': `radial-gradient(circle at center, ${yellowA.yellowA6} , ${amberA.amberA5})`,
  },
});

export const pinkTheme = createTheme('pink-theme', {
  colors: {
    ...purpleDark,
    ...pink,
    ...plumDark,
    ...mauve,
    ...pink,
    ...pinkA,
    ...grayDarkA,
    ...mauveA,
    ...purpleDarkA,
    ...pinkA,
    ...plumDarkA,
    ...crimsonDark,
    'background-primary-neutral': mauve.mauve1,
    'background-primary-hover': mauve.mauve3,
    'background-secondary-neutral': mauve.mauve3,
    'background-secondary-hover': mauve.mauve5,
    'background-tertiary-neutral': mauve.mauve5,
    'background-tertiary-hover': mauve.mauve7,
    'background-accent-neutral': mauve.mauve1,
    'background-accent-hover': mauve.mauve3,
    'background-ghost-neutral': 'transparent',
    'background-ghost-hover': mauve.mauve3,
    'background-mutedAccent': pink.pink2,
    'background-user': pink.pink6,
    'background-overlay': mauveA.mauveA8,
    'background-selection': pink.pink4,
    'border-primary': mauve.mauve5,
    'border-secondary': mauve.mauve6,
    'border-tertiary': mauve.mauve7,
    'border-accent': pink.pink1,
    'border-contrast': pink.pink10,
    'border-focus-base': pink.pink10,
    'border-focus-additive': pink.pink11,
    'shadow-default': mauveA.mauveA5,
    'shadow-secondary': mauveA.mauveA4,
    'text-primary': mauve.mauve12,
    'text-secondary': mauve.mauve11,
    'text-accent': mauve.mauve1,
    'text-accent-bright': mauve.mauve11,
    'text-contrast': mauve.mauve1,
    'hero-background': pink.pink8,
    'background-cta': pink.pink10,
    'hero-radial': pink.pink6,
    'hero-center-radial': `radial-gradient(circle at center, ${pinkA.pinkA6} , ${plumA.plumA5})`,
  },
});

export const redTheme = createTheme('red-theme', {
  colors: {
    ...purpleDark,
    ...tomato,
    ...plumDark,
    ...gray,
    ...tomato,
    ...tomatoA,
    ...grayDarkA,
    ...grayA,
    ...purpleDarkA,
    ...tomatoA,
    ...plumDarkA,
    ...crimsonDark,
    'background-primary-neutral': gray.gray1,
    'background-primary-hover': gray.gray3,
    'background-secondary-neutral': gray.gray3,
    'background-secondary-hover': gray.gray5,
    'background-tertiary-neutral': gray.gray5,
    'background-tertiary-hover': gray.gray7,
    'background-accent-neutral': gray.gray1,
    'background-accent-hover': gray.gray3,
    'background-ghost-neutral': 'transparent',
    'background-ghost-hover': gray.gray3,
    'background-mutedAccent': tomato.tomato2,
    'background-user': tomato.tomato6,
    'background-overlay': grayA.grayA8,
    'background-selection': tomato.tomato4,
    'border-primary': gray.gray5,
    'border-secondary': gray.gray6,
    'border-tertiary': gray.gray7,
    'border-accent': tomato.tomato1,
    'border-contrast': tomato.tomato10,
    'border-focus-base': tomato.tomato10,
    'border-focus-additive': tomato.tomato11,
    'shadow-default': grayA.grayA5,
    'shadow-secondary': grayA.grayA4,
    'text-primary': gray.gray12,
    'text-secondary': gray.gray11,
    'text-accent': gray.gray1,
    'text-accent-bright': gray.gray11,
    'text-contrast': gray.gray1,
    'hero-background': tomato.tomato8,
    'background-cta': tomato.tomato10,
    'hero-radial': tomato.tomato6,
    'hero-center-radial': `radial-gradient(circle at center, ${tomatoA.tomatoA6} , ${plumA.plumA5})`,
  },
});

export const brownTheme = createTheme('brown-theme', {
  colors: {
    ...purpleDark,
    ...brown,
    ...plumDark,
    ...sand,
    ...brown,
    ...brownA,
    ...sandDarkA,
    ...sandA,
    ...purpleDarkA,
    ...brownA,
    ...plumDarkA,
    ...crimsonDark,
    'background-primary-neutral': sand.sand1,
    'background-primary-hover': sand.sand3,
    'background-secondary-neutral': sand.sand3,
    'background-secondary-hover': sand.sand5,
    'background-tertiary-neutral': sand.sand5,
    'background-tertiary-hover': sand.sand7,
    'background-accent-neutral': sand.sand1,
    'background-accent-hover': sand.sand3,
    'background-ghost-neutral': 'transparent',
    'background-ghost-hover': sand.sand3,
    'background-mutedAccent': brown.brown2,
    'background-user': brown.brown6,
    'background-overlay': sandA.sandA8,
    'background-selection': brown.brown4,
    'border-primary': sand.sand5,
    'border-secondary': sand.sand6,
    'border-tertiary': sand.sand7,
    'border-accent': brown.brown1,
    'border-contrast': brown.brown10,
    'border-focus-base': brown.brown10,
    'border-focus-additive': brown.brown11,
    'shadow-default': sandA.sandA5,
    'shadow-secondary': sandA.sandA4,
    'text-primary': sand.sand12,
    'text-secondary': sand.sand11,
    'text-accent': sand.sand1,
    'text-accent-bright': sand.sand11,
    'text-contrast': sand.sand1,
    'hero-background': brown.brown8,
    'background-cta': brown.brown10,
    'hero-radial': brown.brown6,
    'hero-center-radial': `radial-gradient(circle at center, ${brownA.brownA6} , ${amberA.amberA5})`,
  },
});