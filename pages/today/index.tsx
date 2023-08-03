import Head from 'next/head';

import SidebarLayout from '@/layouts/SidebarLayout';

import { Container } from '@mui/material';

function Today() {
  return (
    <>
      <Head>
        <title>Today | Segwise</title>
      </Head>
      <Container
        maxWidth="xl"
        sx={{ px: { xl: 5, lg: 5, md: 5, sm: 2, xs: 2 }, py: 4 }}
      >
        Today
      </Container>
    </>
  );
}

Today.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default Today;
