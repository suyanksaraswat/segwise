import { useContext, useState } from 'react';

import {
  Box,
  Stack,
  IconButton,
  Tooltip,
  styled,
  Typography,
  Select,
  MenuItem,
  TextField
} from '@mui/material';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import { SidebarContext } from 'src/contexts/SidebarContext';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import Image from 'next/image';

const HeaderWrapper = styled(Box)(
  ({ theme }) => `
        height: ${theme.header.height};
        color: ${theme.header.textColor};
        padding: ${theme.spacing(0, 5)};
        right: 0;
        z-index: 6;
        background-color: #FFF;
        border-bottom: 1px solid rgba(33, 33, 35, 0.16);
        backdrop-filter: blur(3px);
        position: fixed;
        justify-content: space-between;
        width: 100%;
        @media (min-width: ${theme.breakpoints.values.lg}px) {
            left: ${theme.sidebar.width};
            width: auto;
        }
`
);

const menuItems = [
  {
    value: '7days',
    label: 'Last 7 days'
  },
  {
    value: '30days',
    label: 'Last 30 days'
  },
  {
    value: '3months',
    label: 'Last 3 months'
  }
];

function Header() {
  const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);

  const [duration, setDuration] = useState(menuItems[0]?.value);

  return (
    <HeaderWrapper display="flex" alignItems="center">
      <Stack direction="row" alignItems="center" gap={1}>
        <Typography variant="h4">Onboarding</Typography>

        <Image src="/icons/dots-three.svg" alt="" width={20} height={20} />
      </Stack>
      <Box display="flex" alignItems="center" gap={1}>
        <TextField placeholder="Select date" size="small" type="date" />

        <Typography variant="body2" sx={{ opacity: 0.5 }}>
          v/s
        </Typography>

        <Select
          size="small"
          placeholder="Select"
          sx={{ minWidth: 64 }}
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        >
          {menuItems?.map((res, i) => (
            <MenuItem key={i} value={res?.value}>
              {res?.label}
            </MenuItem>
          ))}
        </Select>

        <Box
          component="span"
          sx={{
            ml: 2,
            display: { lg: 'none', xs: 'inline-block' }
          }}
        >
          <Tooltip arrow title="Toggle Menu">
            <IconButton color="primary" onClick={toggleSidebar}>
              {!sidebarToggle ? (
                <MenuTwoToneIcon fontSize="small" />
              ) : (
                <CloseTwoToneIcon fontSize="small" />
              )}
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </HeaderWrapper>
  );
}

export default Header;
