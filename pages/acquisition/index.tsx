import Head from 'next/head';

import SidebarLayout from '@/layouts/SidebarLayout';

import { Container } from '@mui/material';

function Acquisition() {
  return (
    <>
      <Head>
        <title>Acquisition | Segwise</title>
      </Head>
      <Container
        maxWidth="xl"
        sx={{ px: { xl: 5, lg: 5, md: 5, sm: 2, xs: 2 }, py: 4 }}
      >
        Acquisition
      </Container>
    </>
  );
}

Acquisition.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default Acquisition;
