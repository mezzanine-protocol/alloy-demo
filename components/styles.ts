import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import * as Dialog from '@radix-ui/react-dialog';
import { CaretDownIcon } from '@radix-ui/react-icons';
import { styled, keyframes } from '../stitches.config';

export const Button = styled('button', {
  all: 'unset',
  cursor: 'pointer',
  fontWeight: '500',
  boxSizing: 'border-box',
  color: '$text-primary',
  display: 'flex',
  justifyContent: 'center',
  height: '$7',
  padding: '$2 $4',
  fontSize: '$4',
  alignItems: 'center',
  borderRadius: '$4',
  backgroundColor: '$background-accent-neutral',
  transition: 'all 150ms ease',
  border: '1px solid transparent',

  '&:hover': {
    border: '1px solid $colors$border-focus-base',
    backgroundColor: '$background-accent-hover',
  },
  '&:focus-visible': {
    border: '1px solid $colors$border-focus-base',
    boxShadow: '0px 0px 0px 1px $colors$border-focus-additive',
  },
  variants: {
    size: {
      small: {
        height: 'auto',
        padding: '$2 $3',
        fontSize: '$4',
      },
    },
    variant: {
      outline: {
        border: '1px solid $colors$text-primary',
      },
      accent: {
        backgroundColor: '$background-cta',
        color: '$text-accent',
        '&:hover': {
          backgroundColor: '$background-mutedAccent',
          color: '$text-primary',
        },
      },
      secondary: {
        backgroundColor: 'transparent',
        color: '$text-primary',
        '&:hover': {
          backgroundColor: '$background-primary-hover',
          color: '$text-primary',
        },
      },
      ghost: {
        color: '$text-accent',
        backgroundColor: 'transparent',
        '&:hover': {
          backgroundColor: 'transparent',
          textDecoration: '$colors$border-accent underline wavy',
          textUnderlineOffset: '4px',
          border: '1px solid transparent',
        },
      },
    },
    isDisabled: {
      true: {
        opacity: 0.5,
        cursor: 'not-allowed',
        '&:hover': {
          backgroundColor: '$background-cta',
          border: '1px solid transparent',
        },
      },
    },
  },
});

export const CompanyTitleCreditCard = styled('h1', {
  fontSize: '$7',
  fontWeight: '400',
  lineHeight: '30px',
  margin: 0,
});

export const Text = styled('span', {
  fontSize: '$5',
});

export const Box = styled('div');

export const BoxFlex = styled('div', {
  display: ' flex',
});

export const BoxLogo = styled('div', {
  display: ' flex',
  columnGap: '$2',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  zIndex: '1',
});

export const BoxMargin = styled('div', {
  marginLeft: '$7',
  marginRight: '$7',
});

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  border: '1px solid $border-accent',
  borderRadius: '20px',
  background: 'linear-gradient(8deg, $whiteA10, $whiteA5)',
  padding: '$5',
  minWidth: '320px',
  width: '100%',
  color: '$text-accent',
  gap: '$6',
  zIndex: 1,
  maxWidth: '444px',
  transition: 'all 350ms ease',
  backdropFilter: 'blur(10px)',
  '&:hover': {
    transform: 'rotate3d(1,5,2,10deg)',
  },
  variants: {
    small: {
      true: {
        transform: 'scale(0.8)',
        '&:hover': {
          transform: 'scale(0.8) rotate3d(1,5,2,10deg)',
        },
      },
    },
    dark: {
      true: {
        background:
          'linear-gradient(60deg, $background-cta, $text-accent-bright)',
      },
    },
  },
});

export const Input = styled('input', {
  boxSizing: 'border-box',
  height: '$7',
  padding: '$3',
  fontSize: '$4',
  borderRadius: '$2',
  border: '1px solid $border-tertiary',
  backgroundColor: 'transparent',
  outline: 'none',
  width: '100%',
  transition: 'all 150ms ease',
  '&:hover': {
    backgroundColor: '$background-primary-hover',
  },
  '&:focus-visible': {
    border: '1px solid $colors$border-focus-base',
    boxShadow: '0px 0px 0px 1px $colors$border-focus-additive',
    backgroundColor: '$background-primary-neutral',
  },
  variants: {
    error: {
      true: {
        border: '1px solid #F67274',
      },
    },
  },
});

export const StyledLabel = styled('label', {
  fontSize: '$4',
  color: '$mauve11',
  '&:after': {
    paddingLeft: '$1',
    content: '*',
    color: '$violet10',
  },
});

export const ErrorLabel = styled('label', {
  marginLeft: '$2',
  fontSize: '$4',
  color: '#F67274',
});

const TopCircleMove = keyframes({
  '0%': {
    transform: 'translate(0,0) rotate(320deg)',
  },
  '25%': {
    transform: 'translate(-20px, 20px) rotate(320deg)',
  },
  '50%': {
    transform: 'translate(0px, 0px) rotate(320deg)',
  },
  '75%': {
    transform: 'translate(-20px,20px) rotate(320deg)',
  },
  '100%': {
    transform: 'translate(0px,0px) rotate(320deg)',
  },
});

const BottomHalfCirclemove = keyframes({
  '0%': {
    transform: 'translate(0,0) rotate(320deg)',
  },
  '25%': {
    transform: 'translate(20px, -20px) rotate(320deg)',
  },
  '50%': {
    transform: 'translate(0px, 0px) rotate(320deg)',
  },
  '75%': {
    transform: 'translate(20px,-20px) rotate(320deg)',
  },
  '100%': {
    transform: 'translate(0px,0px) rotate(320deg)',
  },
});
export const TopHalfCircle = styled('div', {
  display: 'grid',
  gridTemplateRows: '1fr 1fr',
  borderRadius: '$round',
  size: '$7',
  overflow: 'hidden',
  gap: '$1',
  boxSizing: 'border-box',
  transition: 'all 350ms ease',
  animation: `${TopCircleMove} 3s infinite`,
});

export const BottomHalfCircle = styled('div', {
  display: 'grid',
  gridTemplateRows: '1fr 1fr',
  borderRadius: '$round',
  size: '$7',
  overflow: 'hidden',
  gap: '$1',
  boxSizing: 'border-box',
  transition: 'all 350ms ease',
  animation: `${BottomHalfCirclemove} 3s infinite`,
});

export const Circle = styled('div', {
  height: '100%',
  width: '100%',
  backgroundColor: '$background-cta',
});

export const CompanyTitleLogo = styled('h1', {
  fontSize: '$7',
  lineHeight: '$8',
  fontWeight: '500',
  margin: 0,
  color: '$text-accent',
});

const enterFromRight = keyframes({
  '0%': { transform: 'translateX(200px)', opacity: 0 },

  '100%': { transform: 'translateX(0)', opacity: 1 },
});

const enterFromLeft = keyframes({
  '0%': { transform: 'translateX(-200px)', opacity: 0 },
  '100%': { transform: 'translateX(0)', opacity: 1 },
});

const exitToRight = keyframes({
  '0%': { transform: 'translateX(0)', opacity: 1 },

  '100%': { transform: 'translateX(200px)', opacity: 0 },
});

const exitToLeft = keyframes({
  '0%': { transform: 'translateX(0)', opacity: 1 },

  '100%': { transform: 'translateX(-200px)', opacity: 0 },
});

const scaleIn = keyframes({
  from: { transform: 'rotateX(-30deg) scale(0.9)', opacity: 0 },
  to: { transform: 'rotateX(0deg) scale(1)', opacity: 1 },
});

const scaleOut = keyframes({
  from: { transform: 'rotateX(0deg) scale(1)', opacity: 1 },
  to: { transform: 'rotateX(-10deg) scale(0.95)', opacity: 0 },
});

export const NavigationMenu = styled(NavigationMenuPrimitive.Root, {
  position: 'fixed',
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  zIndex: 100,
});
export const NavigationMenuList = styled(NavigationMenuPrimitive.List, {
  all: 'unset',
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: 'transparent',
  padding: '$3',
  borderRadius: '$2',
  width: '100%',
  listStyle: 'none',
  //border: '1px solid $border-secondary',
  opacity: '0.99',
  //boxShadow: `0 2px 10px $colors$shadow-default`,

  variants: {
    width: {
      phone: {
        minWidth: '400px',
      },
      tablet: { minWidth: '680x' },
      desktop: { minWidth: '1080px' },
      default: {
        minWidth: '680px',
      },
    },
  },
});

const itemStyles = {
  padding: '8px 12px',
  outline: 'none',
  userSelect: 'none',
  cursor: 'pointer',

  fontWeight: 500,
  lineHeight: 1,
  borderRadius: '$1',
  color: '$text-accent',
  border: '1px solid transparent',
  '&:focus': { position: 'relative' },
  '&:focus-visible': {
    border: '1px solid $border-focus-base',
    boxShadow: '0px 0px 0px 1px $colors$border-focus-additive',
  },
  '&:hover': {
    color: '$text-accent',
    textDecoration: '$colors$border-accent underline wavy',
    textUnderlineOffset: '2px',
  },
};

export const NavigationMenuItem = styled(NavigationMenuPrimitive.Item, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const NavigationMenuTrigger = styled(NavigationMenuPrimitive.Trigger, {
  all: 'unset',
  ...itemStyles,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 2,
});

export const StyledCaret = styled(CaretDownIcon, {
  position: 'relative',
  color: '$text-accent',
  top: 1,
  '[data-state=open] &': { transform: 'rotate(-180deg)' },
  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'transform 250ms ease',
  },
});

export const NavigationMenuContent = styled(NavigationMenuPrimitive.Content, {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  '@media only screen and (min-width: 600px)': { width: 'auto' },
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '250ms',
    animationTimingFunction: 'ease',
    animationFillMode: 'forwards',
    '&[data-motion="from-start"]': { animationName: enterFromLeft },
    '&[data-motion="from-end"]': { animationName: enterFromRight },
    '&[data-motion="to-start"]': { animationName: exitToLeft },
    '&[data-motion="to-end"]': { animationName: exitToRight },
  },
});
export const NavigationMenuLink = styled(NavigationMenuPrimitive.Link, {
  ...itemStyles,
  display: 'block',
  textDecoration: 'none',
  lineHeight: 1,
});
export const NavigationMenuViewPort = styled(NavigationMenuPrimitive.Viewport, {
  position: 'relative',
  transformOrigin: 'top center',
  width: '100%',
  backgroundColor: 'transparent',
  borderRadius: '$2',
  overflow: 'hidden',
  border: '1px solid $colors$border-primary',
  boxShadow: `0 2px 10px $colors$shadow-default`,
  height: 'var(--radix-navigation-menu-viewport-height)',

  '@media only screen and (min-width: 600px)': {
    width: 'var(--radix-navigation-menu-viewport-width)',
  },
  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'width, height, 300ms ease',

    '&[data-state="open"]': { animation: `${scaleIn} 200ms ease forwards` },
    '&[data-state="closed"]': { animation: `${scaleOut} 200ms ease forwards` },
  },
});

export const ViewportPosition = styled('div', {
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  top: '100%',
  left: 0,
  perspective: '2000px',
});

export const ContentList = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  padding: '$3',
  margin: 0,
  columnGap: 10,
  listStyle: 'none',
  variants: {
    layout: {
      one: {
        '@media only screen ': {
          width: 200,
          gridTemplateColumns: '.75fr 1fr',
        },
      },
    },
  },
});

export const DialogContent = styled(Dialog.Content, {
  backgroundColor: '$background-primary-neutral',
  borderRadius: 6,
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '800px',
  maxHeight: '85vh',
  zIndex: 9000,
  padding: '$3',
  display: 'flex',
  flexDirection: 'column',
});

export const DialogDescription = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
});

export const DialogOverlay = styled(Dialog.Overlay, {
  position: 'absolute',
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,
  backgroundColor: '$background-overlay',
  backdropFilter: 'blur(10px)',
  transition: 'all 350ms ease',
  zIndex: 5000,
});

export const CloseButton = styled(Dialog.DialogClose, {
  outline: 'none',
  backgroundColor: 'transparent',
  border: 'none',
  size: '$6',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '$round',
  '&:hover': {
    backgroundColor: '$background-primary-hover',
  },
});

export const Title = styled(Dialog.DialogTitle, {
  fontSize: '$4',
  fontWeight: '500',
  color: '$text-primary',
});

export const TopContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const StyledSelect = styled('select', {
  boxSizing: 'border-box',
  position: 'relative',
  height: '$7',
  padding: '$1 $6 $1 $3',
  fontSize: '$4',
  borderRadius: '$2',
  border: '1px solid $border-tertiary',
  backgroundColor: 'transparent',
  outline: 'none',
  width: '100%',
  transition: 'all 150ms ease',
  appearance: 'none',
  '&:hover': {
    backgroundColor: '$background-primary-hover',
  },
  '&:focus-visible': {
    border: '1px solid $colors$border-focus-base',
    boxShadow: '0px 0px 0px 1px $colors$border-focus-additive',
    backgroundColor: '$background-primary-neutral',
  },
});

export const StyledThemeButton = styled('button', {
  all: 'unset',
  height: '$6',
  width: '$6',
  borderRadius: '$2',
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  top: '$5',
  right: '$6',
  zIndex: 200,
  cursor: 'ponter',
  transition: 'all 150ms ease',
  color: '$text-accent',
  '&:focus-visible': {
    border: '1px solid $colors$border-focus-base',
    boxShadow: '0px 0px 0px 1px $colors$border-focus-additive',
  },

  '&:hover': {
    backgroundColor: '$background-accent-hover',
    color: '$text-primary',
    svg: {
      transform: 'rotate(15deg)',
    },
  },
  variants: {
    width: {
      phone: {
        bottom: '$5',
        right: '$6',
        top: 'auto',
      },
      tablet: {
        bottom: '$5',
        right: '$6',
        top: 'auto',
      },
    },
  },
});

export const ContainerRelative = styled('div', {
  position: 'relative',
  top: 0,
  left: 0,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '80px',
  backgroundColor: '$hero-background',
  overflow: 'hidden',
  color: '$text-accent',
  '&:before': {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: '0.6',
    content: ' ',
    background: 'url("noise_2.svg")',
  },
  '&:after': {
    position: 'absolute',
    top: '25%',
    left: '50',
    width: '50%',
    height: '50%',
    content: ' ',
    background:
      'radial-gradient(circle at center, rgba(74,169,58,0.8), rgba(129,225,114,0))',
    filter: 'blur(100px)',
  },
});

export const UserBox = styled('div', {
  padding: '$2',
  backgroundColor: '$background-user',
  fontSize: '$3',
  color: '$text-primary',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '$2',
  '&:hover': {
    cursor: 'pointer',
    filter: 'brightness(110%)',
  },
});

export const FlowSelector = styled('div', {});

export const Subtitle = styled(Dialog.DialogTitle, {
  fontSize: '16px',
  fontWeight: '500',
  lineHeight: '20px',
});

export const FlowButton = styled('button', {
  outline: 'none',
  fontSize: '$3',
  border: '2px solid $background-primary-hover',
  width: 'fit-content',
  fontWeight: 'normal',
  padding: '8px 20px 8px 8px',
  marginRight: '15px',
  marginBottom: '10px',
  display: 'inline-flex',
  justifyContent: 'center',
  borderRadius: '7px',
  alignItems: 'center',
  '&:disabled': {
    pointerEvents: 'none',
  },
  variants: {
    isSelected: {
      unselected: {
        backgroundColor: '$background-primary-hover',
        '&:hover': {
          backgroundColor: '#EEE',
          borderColor: '#EEE',
          color: '$text-primary',
        },
      },
      selected: {
        borderColor: '#1D4ED8',
        backgroundColor: '#EFF6FF',
        '&:hover': {
          backgroundColor: '#EAF1FA',
        },
        color: '$text-primary',
      },
    },
  },
});

export const FlowButtonText = styled('span', {
  paddingLeft: '8px',
});
