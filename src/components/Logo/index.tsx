import { Box } from '@mui/material';
import Image from 'next/image';

function Logo() {
  return (
    <Box>
      <Image
        src="/segwise.svg"
        width={87}
        height={25}
      />
    </Box>
  );
}

export default Logo;
