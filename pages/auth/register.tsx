import { Button } from '@paljs/ui/Button';
import { InputGroup } from '@paljs/ui/Input';
import { Checkbox } from '@paljs/ui/Checkbox';
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import Auth from 'components/admin/Auth';
import Layout from 'components/admin/Layouts';
import Socials from 'components/admin/Auth/Socials';

const Input = styled(InputGroup)`
  margin-bottom: 2rem;
`;

export default function Register() {
  const onCheckbox = () => {
    // v will be true or false
  };
  return (
    <Layout title="Register">
      <Auth title="Nouveau Utilisateur">
        <form>
          <Input fullWidth>
            <input type="text" placeholder="Username" />
          </Input>
          <Input fullWidth>
            <input type="email" placeholder="Email Address" />
          </Input>
          <Input fullWidth>
            <input type="password" placeholder="Password" />
          </Input>
          <Input fullWidth>
            <input type="password" placeholder="Confirm Password" />
          </Input>
          <Checkbox checked onChange={onCheckbox}>
            Agree to{' '}
            <Link href="/">
              <a>Terms & Conditions</a>
            </Link>
          </Checkbox>
          <Button status="Danger" type="button" shape="SemiRound" fullWidth>
            Enregistrer
          </Button>
        </form>
        <Socials />
        <p>
          Already have an account?{' '}
          <Link href="/auth/login">
            <a>Log In</a>
          </Link>
        </p>
      </Auth>
    </Layout>
  );
}
