import Head from 'next/head';

import SidebarLayout from '@/layouts/SidebarLayout';

import { Container } from '@mui/material';

function Notification() {
  return (
    <>
      <Head>
        <title>Notification | Segwise</title>
      </Head>
      <Container
        maxWidth="xl"
        sx={{ px: { xl: 5, lg: 5, md: 5, sm: 2, xs: 2 }, py: 4 }}
      >
        Notification
      </Container>
    </>
  );
}

Notification.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default Notification;
