import { Button } from '@paljs/ui/Button';
import { InputGroup } from '@paljs/ui/Input';

import React from 'react';
import styled from 'styled-components';
import Layout from 'components/admin/Layouts';
import { useForm } from 'react-hook-form';
import { Select } from '@paljs/ui';
import Card from '@mui/material/Card';
import { Grid } from '@mui/material';
import { userRegisterSchema } from '../../../validations';
import { yupResolver } from '@hookform/resolvers/yup';
const Input = styled(InputGroup)`
  margin-bottom: 2rem;
`;
const ErrorSpan = styled.span`
  color: red;
`;

export const positionOptions = [
  { value: 'ROLE_ADMIN', label: 'admin' },
  { value: 'ROLE_TALENT', label: 'talent' },
  { value: 'ROLE_SUPER_ADMIN', label: 'super admin' },
];
export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userRegisterSchema),
  });
  const onSubmit = (data: any) => {};

  return (
    <Layout title="Register">
      <h4>Nouveau Utilisateur</h4>
      <Card sx={{ padding: '2rem' }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item md={6}>
              <Input fullWidth>
                <input type="text" placeholder="Nom" {...register('lastName')} />
                <ErrorSpan>{errors.lastName?.message}</ErrorSpan>
              </Input>
            </Grid>
            <Grid item md={6}>
              <Input fullWidth>
                <input type="text" placeholder="Prénom" {...register('firstName')} />
                <ErrorSpan>{errors.firstName?.message}</ErrorSpan>
              </Input>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item md={6}>
              <Input fullWidth>
                <input type="text" placeholder="Username" {...register('userName', { required: true })} />
                {errors.userName && <ErrorSpan>Ce Champ est requis</ErrorSpan>}
              </Input>
            </Grid>
            <Grid item md={6}>
              <Input fullWidth>
                <input type="text" placeholder="Email" {...register('email', { required: true })} />
                {errors.email && <ErrorSpan>Ce Champ est requis</ErrorSpan>}
              </Input>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item md={6}>
              <Input fullWidth>
                <input type="password" placeholder="Mot de passe" {...register('password', { required: true })} />
              </Input>
            </Grid>
            <Grid item md={6}>
              <Input fullWidth>
                <input
                  type="password"
                  placeholder="Confirmez le mot de passe"
                  {...register('passwordConfirm', { required: true })}
                />
              </Input>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item md={12}>
              <Select options={positionOptions} isMulti multiple placeholder="Selectionez un ou plusieurs Rôles" />
            </Grid>
            <Grid item md={12}>
              <Button status="Danger" type="submit" shape="SemiRound" fullWidth>
                Enregistrer
              </Button>
            </Grid>
          </Grid>
        </form>
      </Card>
    </Layout>
  );
}
