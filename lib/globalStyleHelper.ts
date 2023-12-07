import { DefaultTheme } from 'styled-components';
import {
  Colors,
  gray,
  juicyBlue,
  red,
  purple,
  green,
  orange,
  yellow,
  sky,
  pink,
  teal,
  lime,
} from './colors';
import { spacing } from './spacing';
import { radii } from './radii';
import { fontSize, fontWeight, lineHeight } from './typography';
import { duration, motion } from './animation';
import { zIndex } from './zIndex';
import NeueMontrealBoldWoff from '../public/fonts/NeueMontreal-Bold.woff';
import NeueMontrealBoldWoff2 from '../public/fonts/NeueMontreal-Bold.woff2';
import NeueMontrealRegularWoff from '../public/fonts/NeueMontreal-Regular.woff';
import NeueMontrealRegularWoff2 from '../public/fonts/NeueMontreal-Regular.woff2';
import NeueMontrealMediumWoff from '../public/fonts/NeueMontreal-Medium.woff';
import NeueMontrealMediumWoff2 from '../public/fonts/NeueMontreal-Medium.woff2';

export const getTheme = (mode: 'dark' | 'light'): DefaultTheme => {
  const currentTheme =
    mode === 'light'
      ? {
          color_background_default: gray['gray-000'],
          color_background_accent: gray['gray-1100'],
          color_background_accent_hovered: gray['gray-900'],
          color_background_secondary: gray['gray-300'],
          color_background_secondary_hovered: gray['gray-500'],
          color_background_tertiary: 'transparent',
          color_background_tertiary_hovered: gray['gray-300'],
          color_background_disabled: gray['gray-200'],
          color_border_default: gray['gray-500'],
          color_border_secondary: gray['gray-300'],
          color_border_accent: gray['gray-700'],
          color_border_error: red['red-300'],
          color_border_focus_ring: juicyBlue['juicyBlue-600'],
          // adding 26 to the hex is like making it 15% opacity. Doing this so that I don't need to add another color to our set.
          color_border_focus_shadow: `${juicyBlue['juicyBlue-600']}26`,
          color_border_focus_error_shadow: `${red['red-400']}26`,
          color_background_success: green['green-300'],
          color_background_danger: red['red-300'],
          color_background_warning: orange['orange-300'],
          color_background_attention: yellow['yellow-300'],
          color_background_retry: purple['purple-300'],
          color_background_info: juicyBlue['juicyBlue-200'],
          color_background_neutral: gray['gray-500'],
          color_text_default: gray['gray-1100'],
          color_text_secondary: gray['gray-800'],
          color_text_accent: gray['gray-000'],
          color_text_muted: gray['gray-700'],
          // more to come
          ...fontSize,
          ...fontWeight,
          ...lineHeight,
          ...spacing,
          ...radii,
          ...duration,
          ...motion,
          ...gray,
          ...juicyBlue,
          ...green,
          ...orange,
          ...purple,
          ...yellow,
          ...red,
          ...sky,
          ...teal,
          ...pink,
          ...lime,
          ...zIndex,
        }
      : {
          // This is where dark theme should go but we dont' have one yet so duplicating light theme for passing type check.

          color_background_default: gray['gray-000'],
          color_background_accent: gray['gray-1100'],
          color_background_accent_hovered: gray['gray-900'],
          color_background_secondary: gray['gray-300'],
          color_background_secondary_hovered: gray['gray-500'],
          color_background_tertiary: 'transparent',
          color_background_tertiary_hovered: gray['gray-300'],
          color_background_disabled: gray['gray-200'],
          color_border_default: gray['gray-500'],
          color_border_secondary: gray['gray-300'],
          color_border_accent: gray['gray-700'],
          color_border_error: red['red-300'],
          color_border_focus_ring: juicyBlue['juicyBlue-600'],
          // adding 26 to the hex is like making it 15% opacity. Doing this so that I don't need to add another color to our set.
          color_border_focus_shadow: `${juicyBlue['juicyBlue-600']}26`,
          color_border_focus_error_shadow: `${red['red-400']}26`,
          color_background_success: green['green-300'],
          color_background_danger: red['red-300'],
          color_background_warning: orange['orange-300'],
          color_background_attention: yellow['yellow-300'],
          color_background_retry: purple['purple-300'],
          color_background_info: juicyBlue['juicyBlue-200'],
          color_background_neutral: gray['gray-500'],
          color_text_default: gray['gray-1100'],
          color_text_secondary: gray['gray-800'],
          color_text_accent: gray['gray-000'],
          color_text_muted: gray['gray-700'],
          // more to come
          ...fontSize,
          ...fontWeight,
          ...lineHeight,
          ...spacing,
          ...radii,
          ...duration,
          ...motion,
          ...gray,
          ...juicyBlue,
          ...green,
          ...orange,
          ...purple,
          ...yellow,
          ...red,
          ...sky,
          ...teal,
          ...pink,
          ...lime,
          ...zIndex,
        };
  return currentTheme;
};

export const getGlobalStyleSheet = (theme: 'light' | 'dark') => {
  const currentTheme = getTheme(theme);
  return `
    :root {
      --cl-background-default: ${currentTheme.color_background_default};
      --cl-background-accent: ${currentTheme.color_background_accent};
      --cl-background-accent-hovered: ${currentTheme.color_background_accent_hovered};
      --cl-background-secondary: ${currentTheme.color_background_secondary};
      --cl-background-secondary-hovered: ${currentTheme.color_background_secondary_hovered};
      --cl-background-tertiary: ${currentTheme.color_background_tertiary};
      --cl-background-tertiary-hovered: ${currentTheme.color_background_tertiary_hovered};
      --cl-background-disabled: ${currentTheme.color_background_disabled};
      --cl-background-success: ${currentTheme.color_background_success};
      --cl-background-warning: ${currentTheme.color_background_warning};
      --cl-background-danger: ${currentTheme.color_background_danger};
      --cl-background-info: ${currentTheme.color_background_info};
      --cl-background-retry: ${currentTheme.color_background_retry};
      --cl-background-attention: ${currentTheme.color_background_attention};
      --cl-background-neutral: ${currentTheme.color_background_neutral};
      --cl-border-default: ${currentTheme.color_border_default};
      --cl-border-secondary: ${currentTheme.color_border_secondary};
      --cl-border-accent: ${currentTheme.color_border_accent};
      --cl-border-error: ${currentTheme.color_border_error};
      --cl-border-focus-ring: ${currentTheme.color_border_focus_ring};
      --cl-border-focus-shadow: ${currentTheme.color_border_focus_shadow};
      --cl-border-focus-error-shadow: ${currentTheme.color_border_focus_error_shadow};
      --cl-text-accent: ${currentTheme.color_text_accent};
      --cl-text-default: ${currentTheme.color_text_default};
      --cl-text-secondary: ${currentTheme.color_text_secondary};
      --cl-text-muted: ${currentTheme.color_text_muted};

      --cl-brand-coral: ${Colors.brandCoral};
      --cl-brand-sky: ${Colors.brandSky};

      --cl-gray-000: ${currentTheme['gray-000']};
      --cl-gray-100: ${currentTheme['gray-100']};
      --cl-gray-200: ${currentTheme['gray-200']};
      --cl-gray-300: ${currentTheme['gray-300']};
      --cl-gray-400: ${currentTheme['gray-400']};
      --cl-gray-500: ${currentTheme['gray-500']};
      --cl-gray-600: ${currentTheme['gray-600']};
      --cl-gray-700: ${currentTheme['gray-700']};
      --cl-gray-800: ${currentTheme['gray-800']};
      --cl-gray-900: ${currentTheme['gray-900']};
      --cl-gray-1000: ${currentTheme['gray-1000']};
      --cl-gray-1100: ${currentTheme['gray-1100']};

      --cl-red-100: ${currentTheme['red-100']};
      --cl-red-200: ${currentTheme['red-200']};
      --cl-red-300: ${currentTheme['red-300']};
      --cl-red-400: ${currentTheme['red-400']};
      --cl-red-500: ${currentTheme['red-500']};
      --cl-red-600: ${currentTheme['red-600']};

      --cl-yellow-100: ${currentTheme['yellow-100']};
      --cl-yellow-200: ${currentTheme['yellow-200']};
      --cl-yellow-300: ${currentTheme['yellow-300']};
      --cl-yellow-400: ${currentTheme['yellow-400']};
      --cl-yellow-500: ${currentTheme['yellow-500']};
      --cl-yellow-600: ${currentTheme['yellow-600']};

      --cl-purple-100: ${currentTheme['purple-100']};
      --cl-purple-200: ${currentTheme['purple-200']};
      --cl-purple-300: ${currentTheme['purple-300']};
      --cl-purple-400: ${currentTheme['purple-400']};
      --cl-purple-500: ${currentTheme['purple-500']};
      --cl-purple-600: ${currentTheme['purple-600']};

      --cl-juicyBlue-50: ${currentTheme['juicyBlue-50']};
      --cl-juicyBlue-100: ${currentTheme['juicyBlue-100']};
      --cl-juicyBlue-200: ${currentTheme['juicyBlue-200']};
      --cl-juicyBlue-300: ${currentTheme['juicyBlue-300']};
      --cl-juicyBlue-400: ${currentTheme['juicyBlue-400']};
      --cl-juicyBlue-500: ${currentTheme['juicyBlue-500']};
      --cl-juicyBlue-600: ${currentTheme['juicyBlue-600']};

      --cl-orange-100: ${currentTheme['orange-100']};
      --cl-orange-200: ${currentTheme['orange-200']};
      --cl-orange-300: ${currentTheme['orange-300']};
      --cl-orange-400: ${currentTheme['orange-400']};
      --cl-orange-500: ${currentTheme['orange-500']};
      --cl-orange-600: ${currentTheme['orange-600']};

      --cl-green-100: ${currentTheme['green-100']};
      --cl-green-200: ${currentTheme['green-200']};
      --cl-green-300: ${currentTheme['green-300']};
      --cl-green-400: ${currentTheme['green-400']};
      --cl-green-500: ${currentTheme['green-500']};
      --cl-green-600: ${currentTheme['green-600']};

      --cl-lime-200: ${currentTheme['lime-200']};
      --cl-lime-400: ${currentTheme['lime-400']};
      --cl-lime-600: ${currentTheme['lime-600']};

      --cl-teal-200: ${currentTheme['teal-200']};
      --cl-teal-400: ${currentTheme['teal-400']};
      --cl-teal-600: ${currentTheme['teal-600']};

      --cl-sky-200: ${currentTheme['sky-200']};
      --cl-sky-400: ${currentTheme['sky-400']};
      --cl-sky-600: ${currentTheme['sky-600']};

      --cl-pink-200: ${currentTheme['pink-200']};
      --cl-pink-400: ${currentTheme['pink-400']};
      --cl-pink-600: ${currentTheme['pink-600']};

      --cl-space-0:  ${currentTheme['space-000']};
      --cl-space-1:  ${currentTheme['space-100']};
      --cl-space-2:  ${currentTheme['space-200']};
      --cl-space-3:  ${currentTheme['space-300']};
      --cl-space-4:  ${currentTheme['space-400']};
      --cl-space-5:  ${currentTheme['space-500']};
      --cl-space-6:  ${currentTheme['space-600']};
      --cl-space-7:  ${currentTheme['space-700']};
      --cl-space-8:  ${currentTheme['space-800']};
      --cl-space-9:  ${currentTheme['space-900']};

      --cl-radius-0:  ${currentTheme['radius-000']};
      --cl-radius-1:  ${currentTheme['radius-100']};
      --cl-radius-2:  ${currentTheme['radius-200']};
      --cl-radius-3:  ${currentTheme['radius-300']};
      --cl-radius-circle:  ${currentTheme['radius-circle']};

      --cl-font-size-1: ${currentTheme['font-size-100']};
      --cl-font-size-2: ${currentTheme['font-size-200']};
      --cl-font-size-3: ${currentTheme['font-size-300']};
      --cl-font-size-4: ${currentTheme['font-size-400']};
      --cl-font-size-5: ${currentTheme['font-size-500']};
      --cl-font-size-6: ${currentTheme['font-size-600']};
      --cl-font-size-7: ${currentTheme['font-size-700']};

      --cl-font-weight-regular:  ${currentTheme['font-weight-400']};
      --cl-font-weight-medium:  ${currentTheme['font-weight-500']};
      --cl-font-weight-bold:  ${currentTheme['font-weight-600']};

      --cl-line-height-1: ${currentTheme['line-height-100']};
      --cl-line-height-2: ${currentTheme['line-height-200']};
      --cl-line-height-3: ${currentTheme['line-height-300']};
      --cl-line-height-4: ${currentTheme['line-height-400']};
      --cl-line-height-5: ${currentTheme['line-height-500']};
      --cl-line-height-6: ${currentTheme['line-height-600']};
      --cl-line-height-7: ${currentTheme['line-height-700']};
      --cl-font-family-default: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      --cl-font-family-mono: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas ,Liberation Mono, monospace;

      --cl-duration-50:  ${currentTheme['duration-50']};
      --cl-duration-100: ${currentTheme['duration-100']};
      --cl-duration-150: ${currentTheme['duration-150']};
      --cl-duration-200: ${currentTheme['duration-200']};
      --cl-duration-250: ${currentTheme['duration-250']};
      --cl-duration-300: ${currentTheme['duration-300']};
      --cl-duration-350: ${currentTheme['duration-350']};
      --cl-duration-400: ${currentTheme['duration-400']};

      --cl-motion-linear: ${currentTheme.linear};
      --cl-motion-ease: ${currentTheme.ease};
      --cl-motion-ease-in-out: ${currentTheme['ease-in-out']};
      --cl-motion-ease-in: ${currentTheme['ease-in']};
      --cl-motion-ease-out: ${currentTheme['ease-out']};

      --cl-zindex-modal: ${currentTheme['zindex-modal']};
      --cl-zindex-snackbar: ${currentTheme['zindex-snackbar']};
      --cl-zindex-popover: ${currentTheme['zindex-popover']};
      --cl-zindex-tooltip: ${currentTheme['zindex-tooltip']};


    }

    @font-face {
      font-family: 'Neue Montreal';
      font-style: normal;
      font-weight: 600;
      font-display: auto;
      src: url(${NeueMontrealBoldWoff}) format('woff'),
           url(${NeueMontrealBoldWoff2}) format('woff2');
    }

    @font-face {
      font-family: 'Neue Montreal';
      font-style: normal;
      font-weight: 400;
      src: url(${NeueMontrealRegularWoff}) format('woff'),
           url(${NeueMontrealRegularWoff2}) format('woff2');
    }

    @font-face {
      font-family: 'Neue Montreal';
      font-style: normal;
      font-weight: 500;
      src: url(${NeueMontrealMediumWoff}) format('woff'),
           url(${NeueMontrealMediumWoff2}) format('woff2');
    }

    // TODO: I'll clean this up later, we would want to derive this off of tokens rather than hard code it here 
    body, textarea {
      font-family: var(--cl-font-family-default);
    }

    * {
      box-sizing: border-box;
    }

    pre, code {
      font-family: var(--cl-font-family-mono);
    }

    h1,h2,h3,h4,h5,h6 {
      font-family: "Neue Montreal", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-weight: var(--cl-font-weight-medium);
    }
  `;
};
