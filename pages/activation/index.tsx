import Head from 'next/head';

import SidebarLayout from '@/layouts/SidebarLayout';

import { Container } from '@mui/material';

function Activation() {
  return (
    <>
      <Head>
        <title>Activation | Segwise</title>
      </Head>
      <Container
        maxWidth="xl"
        sx={{ px: { xl: 5, lg: 5, md: 5, sm: 2, xs: 2 }, py: 4 }}
      >
        Activation
      </Container>
    </>
  );
}

Activation.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default Activation;
