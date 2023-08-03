import Head from 'next/head';

import SidebarLayout from '@/layouts/SidebarLayout';

import { Container } from '@mui/material';

function Retention() {
  return (
    <>
      <Head>
        <title>Retention | Segwise</title>
      </Head>
      <Container
        maxWidth="xl"
        sx={{ px: { xl: 5, lg: 5, md: 5, sm: 2, xs: 2 }, py: 4 }}
      >
        Retention
      </Container>
    </>
  );
}

Retention.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default Retention;
