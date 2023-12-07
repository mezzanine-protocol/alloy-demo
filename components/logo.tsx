import Link from 'next/link';
import { CSS } from '../stitches.config';
import Image from 'next/image';
import logo from '../public/Logo.png';
import { BoxLogo, CompanyTitleLogo } from './styles';

interface LogoProps {
  style?: React.CSSProperties;
  css?: CSS;
  companyName?: string;
}

const Logo = ({ css, style, companyName = 'Limelight' }: LogoProps) => {
  return (
    <Link href="/">
      <BoxLogo css={css} style={style}>
        <Image src={logo} alt="Company logo" />
        <CompanyTitleLogo>{companyName}</CompanyTitleLogo>
      </BoxLogo>
    </Link>
  );
};

export default Logo;
