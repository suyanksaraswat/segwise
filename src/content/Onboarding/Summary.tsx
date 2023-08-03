import { Box, Typography } from '@mui/material';
import Image from 'next/image';

function Summary() {
  return (
    <Box
      sx={{
        borderRadius: 5,
        px: 4,
        py: 1.5,
        background:
          'linear-gradient(90deg, rgba(127, 84, 220, 0.1) 0%, #fff 100%)',
        display: 'flex',
        alignItems: { xs: 'left', md: 'center' },
        flexDirection: { xs: 'column', md: 'row' },
        gap: 2
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Image src="/icons/line-segments.svg" alt="" height={16} width={16} />
        <Typography variant="h4" fontWeight={600} color="primary">
          143 Mn data points •
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Image src="/icons/intersect.svg" alt="" height={16} width={16} />
        <Typography variant="h4" fontWeight={600} color="primary">
          3,595 segments analysed in 3.4s
        </Typography>
      </Box>
    </Box>
  );
}

export default Summary;
