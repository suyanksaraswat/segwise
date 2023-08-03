import { Chart } from '@/components/Chart';
import {
  Box,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { ApexOptions } from 'apexcharts';
import Image from 'next/image';

const chartSeries = [
  {
    name: 'sales',
    data: [
      {
        x: '23 Jun',
        y: 448
      },
      {
        x: '24 Jun',
        y: 470
      },
      {
        x: '25 Jun',
        y: 540
      },
      {
        x: '26 Jun',
        y: 580
      },
      {
        x: '27 Jun',
        y: 690
      },
      {
        x: '28 Jun',
        y: 690
      }
    ]
  }
];

interface Props {
  title: string;
}

function Statistics({ title }: Props) {
  const theme = useTheme();
  const largeScreen = useMediaQuery(theme.breakpoints.up('md'));

  const average =
    chartSeries?.[0]?.data?.length > 0
      ? chartSeries?.[0]?.data?.reduce((a, b) => a + b?.y, 0) /
        chartSeries?.[0]?.data?.length
      : 0;

  const chartOptions: ApexOptions = {
    chart: {
      type: 'bar',

      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        borderRadius: [5]
      }
    },
    annotations: {
      yaxis: [
        {
          y: average,
          borderColor: '#6936D7',
          label: {
            borderColor: '#6936D7',
            style: { color: '#6936D7', background: '#F3F1F8' },
            text: `7d avg • ${Math.floor(average)}`
          }
        }
      ]
    },
    colors: ['#A181E4'],
    tooltip: {
      x: {
        formatter: function (val) {
          return `${val}`;
        }
      }
    }
  };

  return (
    <Box
      sx={{
        borderRadius: 2,
        px: 4,
        py: 3,
        background: '#F3F1F8'
      }}
    >
      <Grid container spacing={1}>
        <Grid item xs={12} md={5}>
          <Box mb={3}>
            <Typography variant="h3" fontWeight={400} mb={1}>
              {title}
            </Typography>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Image
                  src="/icons/line-segments-gray.svg"
                  alt=""
                  height={16}
                  width={16}
                  color="rgba(33, 33, 35, 0.70)"
                />
                <Typography
                  variant="body2"
                  sx={{ color: 'rgba(33, 33, 35, 0.70)' }}
                >
                  143 Mn data points •
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Image
                  src="/icons/intersect-gray.svg"
                  alt=""
                  height={16}
                  width={16}
                  color="rgba(33, 33, 35, 0.70)"
                />
                <Typography
                  variant="body2"
                  sx={{ color: 'rgba(33, 33, 35, 0.70)' }}
                >
                  3,595 segments analysed in 3.4s
                </Typography>
              </Box>
            </Box>
          </Box>

          <Divider />

          <Box mt={3} display="flex">
            <Box flex={1}>
              <Typography variant="h3" fontWeight={400} mb={1}>
                24,234
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography
                    variant="body2"
                    sx={{ color: 'rgba(33, 33, 35, 0.70)' }}
                  >
                    users onboarded today
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box flex={1}>
              <Box display="flex" gap={1} mb={1}>
                <Image
                  src="/icons/chevron-up-double.svg"
                  alt=""
                  height={20}
                  width={20}
                />

                <Typography variant="h3" color="primary" fontWeight={400}>
                  4.32%
                </Typography>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography
                    variant="body2"
                    sx={{ color: 'rgba(33, 33, 35, 0.70)' }}
                  >
                    against last 7 day avg
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={7}>
          <Chart
            height={largeScreen ? 160 : 250}
            options={chartOptions}
            series={chartSeries}
            type="bar"
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Statistics;
