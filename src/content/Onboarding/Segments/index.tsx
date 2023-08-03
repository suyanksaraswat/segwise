import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import StyledTable from './StyledTable';

function Segments() {
  return (
    <Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        gap={2}
        mb={3}
      >
        <Box display="flex" alignItems="center" gap={2}>
          <Image
            src="/icons/chevron-up-double-colored.svg"
            width={24}
            height={32}
          />

          <Box>
            <Typography variant="h4" fontWeight={800} color="primary" mb={0.5}>
              POSITIVE SEGMENTS
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
        </Box>

        <Button
          variant="outlined"
          size="small"
          color="secondary"
          sx={{ borderColor: 'rgba(33, 33, 35, 0.16)', fontWeight: 400 }}
        >
          View all
        </Button>
      </Box>

      <StyledTable />
    </Box>
  );
}

export default Segments;
