import { Button } from '@paljs/ui/Button';
import { InputGroup } from '@paljs/ui/Input';
import { Checkbox } from '@paljs/ui/Checkbox';
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import Auth from 'components/admin/Auth';
import Layout from 'components/admin/Layouts';
import Socials from 'components/admin/Auth/Socials';
import { Select } from '@paljs/ui';


const Input = styled(InputGroup)`
  margin-bottom: 2rem;
`;

export default function Register() {
  const positionOptions = [
    { value: 'topRight', label: 'Top-Right' },
    { value: 'topLeft', label: 'Top-Left' },
    { value: 'bottomRight', label: 'Bottom-Right' },
    { value: 'bottomLeft', label: 'Bottom-Left' },
    { value: 'topStart', label: 'Top-Start' },
    { value: 'topEnd', label: 'Top-End', selected: true },
    { value: 'bottomStart', label: 'Bottom-Start', selected: true },
    { value: 'bottomEnd', label: 'Bottom-End', selected: true },
  ];
  return (
    <Layout title="Register">
      <Auth title="Nouveau Utilisateur">
        <form>
          <Input fullWidth>
            <input type="text" placeholder="Nom" />
          </Input>
          <Input fullWidth>
            <input type="text" placeholder="Prénom" />
          </Input>
          <Input fullWidth>
            <input type="text" placeholder="Username" />
          </Input>
          <Input fullWidth>
            <input type="email" placeholder="Adresse email" />
          </Input>
          <Input fullWidth>
            <input type="password" placeholder="Mot de passe" />
          </Input>
          <Input fullWidth>
            <input type="password" placeholder="Confirmez le mot de passe" />
          </Input>
          <Select options={positionOptions} isMulti multiple placeholder="Selectionez un ou plusieurs Rôles" />
          <Button status="Danger" type="button" shape="SemiRound" fullWidth>
            Enregistrer
          </Button>
        </form>
      </Auth>
    </Layout>
  );
}
