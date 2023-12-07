import Image from 'next/image';
import logo from '../public/Logo.png';
import { useEffect, useState } from 'react';
import React from 'react';
import { BoxFlex, CompanyTitleCreditCard, Container, Text } from './styles';
import { faker } from '@faker-js/faker';

interface LogoProps {
  style?: React.CSSProperties;
  small?: boolean;
  dark?: boolean;
  user?: boolean;
  companyName?: string;
}

const CreditCard = ({
  style,
  small,
  dark = false,
  user = false,
  companyName = 'Limelight',
}: LogoProps) => {
  const [name, setName] = useState('');

  useEffect(() => {
    setName(faker.name.fullName());
  }, []);

  useEffect(() => {
    if (user) {
      const retrievedUser = localStorage.getItem('user');

      if (retrievedUser) {
        const userObject = JSON.parse(retrievedUser);
        setName(userObject.firstName + ' ' + userObject.lastName);
      }
    }
  }, [user]);

  return (
    <Container small={small ? small : false} dark={dark}>
      <BoxFlex
        css={{
          justifyContent: 'space-between',
        }}
      >
        <BoxFlex
          css={{
            width: ' 38px',
            height: '26px',
            backgroundColor: '#F6C859',
            borderRadius: '$1',
            border: '1px solid $orange1',
            display: 'grid',
            gridTemplateRows: '1fr 1fr 1fr',
            gridTemplateColumns: '1fr 1fr 1fr',
          }}
        >
          <BoxFlex
            css={{
              height: '100%',
              width: '100%',
              borderBottom: '1px solid $orange1',
            }}
          />
          <BoxFlex
            css={{
              height: '100%',
              width: '100%',
              borderLeft: '1px solid $orange1',
              display: 'grid',
              gridTemplateRows: '1fr 1fr',
            }}
          >
            <BoxFlex
              css={{
                height: '100%',
                width: '100%',
                borderBottom: '1px solid $orange1',
                borderRight: '1px solid $orange1',
              }}
            />
          </BoxFlex>
          <BoxFlex
            css={{
              height: '100%',
              width: '100%',
              borderBottom: '1px solid $orange1',
            }}
          />
          <BoxFlex
            css={{
              height: '100%',
              width: '100%',
              borderBottom: '1px solid $orange1',
            }}
          />
          <BoxFlex
            css={{
              height: '100%',
              width: '100%',
              borderLeft: '1px solid $orange1',
            }}
          />
          <BoxFlex
            css={{
              height: '100%',
              width: '100%',
              borderLeft: '1px solid $orange1',
              borderBottom: '1px solid $orange1',
            }}
          />
          <BoxFlex
            css={{
              height: '100%',
              width: '100%',
            }}
          />
          <BoxFlex
            css={{
              height: '100%',
              width: '100%',
              borderLeft: '1px solid $orange1',
              display: 'grid',
              gridTemplateRows: '1fr 1fr',
            }}
          >
            <BoxFlex
              css={{
                height: '100%',
                width: '100%',
                borderBottom: '1px solid $orange1',
              }}
            />
          </BoxFlex>
          <BoxFlex
            css={{
              height: '100%',
              width: '100%',
              borderLeft: '1px solid $orange1',
            }}
          />
        </BoxFlex>

        <BoxFlex
          css={{ gap: '$2', justifyContent: 'center', alignItems: 'center' }}
        >
          <Image src={logo} alt="Company logo" />
          <CompanyTitleCreditCard>{companyName}</CompanyTitleCreditCard>
        </BoxFlex>
      </BoxFlex>
      <BoxFlex
        css={{
          flexDirection: 'column',
          gap: '$6',
        }}
        style={style}
      >
        <Text>1234 5567 6543 4567 </Text>
        <BoxFlex
          css={{
            gap: '$6',
          }}
        >
          <BoxFlex
            css={{
              flexDirection: 'column',
              gap: '$6',
            }}
          >
            <Text> Name </Text>
            <Text> {name}</Text>
          </BoxFlex>
          <BoxFlex
            css={{
              flexDirection: 'column',
              gap: '$6',
            }}
          >
            <Text> Exp </Text>
            <Text> 01/33</Text>
          </BoxFlex>
        </BoxFlex>
      </BoxFlex>
    </Container>
  );
};

export default CreditCard;
