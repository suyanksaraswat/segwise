import Head from 'next/head';

import SidebarLayout from '@/layouts/SidebarLayout';

import { Container, Grid } from '@mui/material';
import Summary from '@/content/Onboarding/Summary';
import Statistics from '@/content/Onboarding/Statistics';
import Segments from '@/content/Onboarding/Segments';

function Onboarding() {
  return (
    <>
      <Head>
        <title>Onboarding | Segwise</title>
      </Head>
      <Container
        maxWidth="xl"
        sx={{ px: { xl: 5, lg: 5, md: 5, sm: 2, xs: 2 }, py: 4 }}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          rowGap={4}
        >
          <Grid item xs={12}>
            <Summary />
          </Grid>
          <Grid item xs={12}>
            <Statistics title="Volume" />
          </Grid>
          <Grid item xs={12}>
            <Statistics title="Onboarding%" />
          </Grid>
          <Grid item xs={12}>
            <Segments />
          </Grid>
          <Grid item xs={12}>
            <Segments />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

Onboarding.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default Onboarding;
