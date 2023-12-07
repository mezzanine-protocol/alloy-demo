import React from 'react';
import { useRouter } from 'next/router';
import Logo from './logo';
import { ThemeButton } from './ThemeButton';
import { User } from '../types/user';
import { CompanyContext } from '../pages/_app';
import { ContainerRelative, BoxMargin, UserBox } from './styles';

interface TopNav {
  user: User | undefined;
}

export const TopNav = ({ user }: TopNav) => {
  const { ...context } = React.useContext(CompanyContext);
  const initials =
    user && 'firstName' in user
      ? user.firstName[0].toUpperCase() + user.lastName[0].toUpperCase()
      : 'My Account Settings';
  const router = useRouter();

  return (
    <ContainerRelative>
      <BoxMargin
        css={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 10,
          width: '100%',
        }}
      >
        <BoxMargin>
          <Logo companyName={context.companyName} />
        </BoxMargin>
        <BoxMargin css={{ display: 'flex', gap: '$4', alignItems: 'center' }}>
          <UserBox
            onClick={() => {
              router.push('/profile/details');
            }}
          >
            {initials}
          </UserBox>
          <ThemeButton />
        </BoxMargin>
      </BoxMargin>
    </ContainerRelative>
  );
};
