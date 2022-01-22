import { Button } from '@paljs/ui/Button';
import { InputGroup } from '@paljs/ui/Input';
import { Checkbox } from '@paljs/ui/Checkbox';
import React from 'react';
import Link from 'next/link';

import Auth, { Group } from 'components/admin/Auth';
import Socials from 'components/admin/Auth/Socials';
import Layout from 'components/admin/Layouts';

export default function Login() {
  const onCheckbox = () => {
    // v will be true or false
  };
  return (
    <Layout title="Se Connecter">
      <Auth title="Se Connecter" subTitle="Salut! connectez-vous">
        <form>
          <InputGroup fullWidth>
            <input type="email" placeholder="Votre adresse email" />
          </InputGroup>
          <InputGroup fullWidth>
            <input type="password" placeholder="Mot de passe" />
          </InputGroup>
          <Group>
            <Checkbox checked onChange={onCheckbox}>
              Se souvenir de moi
            </Checkbox>
            <Link href="/auth/request-password">
              <a>Mot de passe oublié ?</a>
            </Link>
          </Group>
          <Button status="Danger" type="button" shape="SemiRound" fullWidth>
            Connexion
          </Button>
        </form>
        <Socials />
        <p>
          Don&apos;t have account?{' '}
          <Link href="/admin/auth/register">
            <a>Inscription</a>
          </Link>
        </p>
      </Auth>
    </Layout>
  );
}
