import { useTheme } from 'next-themes';
import { CSS } from '../stitches.config';
import { SunIcon, MoonIcon } from '@radix-ui/react-icons';
import { StyledThemeButton } from './styles';

interface ThemeButtonProps {
  style?: React.CSSProperties;
  css?: CSS;
}

export const ThemeButton = ({ style, css }: ThemeButtonProps) => {
  const { setTheme, theme } = useTheme();

  return (
    <StyledThemeButton
      onClick={() => {
        theme?.includes('purple') ? setTheme('brown') : setTheme('purple');
      }}
      width={{
        '@phone': 'phone',
        '@tablet': 'tablet',
      }}
      css={css}
      style={style}
    >
      {theme?.includes('brown') ? <MoonIcon /> : <SunIcon />}
    </StyledThemeButton>
  );
};
