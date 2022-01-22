import React from 'react';
import { Card, CardBody } from '@paljs/ui/Card';
import { Button } from '@paljs/ui/Button';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const ErrorStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  small {
    margin-bottom: 3rem;
  }
  h1 {
    margin-bottom: 0.5rem;
  }
  a {
    max-width: 20rem;
  }
`;
export default function Error(): JSX.Element {
  const router = useRouter();
  return (
    <Card>
      <CardBody>
        <ErrorStyle>
          <h1>404 Page Non Trouvée!</h1>
          <small>La page que vous recherchez n&apos;existe pas.</small>
          <Button status="Primary" onClick={() => router.push('/')} shape="Rectangle">
            Take me home
          </Button>
        </ErrorStyle>
      </CardBody>
    </Card>
  );
}
