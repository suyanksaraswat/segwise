import {
  Box,
  Button,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';
import Image from 'next/image';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';

function StyledTable() {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow
            sx={{
              background: 'transparent',
              borderTop: '0.5px solid rgba(33, 33, 35, 0.16)'
            }}
          >
            <TableCell>
              <Typography variant="body2" textTransform="none">
                Segment Properties
              </Typography>
            </TableCell>

            <TableCell>
              <Box display="flex" alignItems="center" gap={0.5}>
                <Typography variant="body2" textTransform="none">
                  Share Change
                </Typography>

                <Image src="/icons/info.svg" alt="" height={16} width={16} />
              </Box>
            </TableCell>

            <TableCell>
              <Box display="flex" alignItems="center" gap={0.5}>
                <Typography variant="body2" textTransform="none">
                  Onboarding%
                </Typography>

                <Image src="/icons/info.svg" alt="" height={16} width={16} />
              </Box>
            </TableCell>

            <TableCell>
              <Typography variant="body2" textTransform="none">
                Impact Score
              </Typography>
            </TableCell>

            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {[1, 2, 3, 4].map((_, i) => (
            <>
              <TableRow
                key={i}
                sx={{
                  td: {
                    borderBottom:
                      i === 3 ? 'none' : '0.5px solid rgba(33, 33, 35, 0.16)'
                  }
                }}
              >
                <TableCell>
                  <Chip
                    label={
                      <>
                        acquisition_source = <b>facebook</b>
                      </>
                    }
                    sx={{ borderRadius: 1, background: '#F3F1F8', m: 0.5 }}
                  />
                  <Chip
                    label={
                      <>
                        geo_coded_city = <b>Lucknow</b>
                      </>
                    }
                    sx={{ borderRadius: 1, background: '#F3F1F8', m: 0.5 }}
                  />
                </TableCell>
                <TableCell>
                  <Box display="flex" alignItems="center" gap={0.5}>
                    <Typography variant="h5" noWrap fontWeight={400}>
                      11.5% →<b>12%</b>
                    </Typography>

                    <Chip
                      label={'+4.3%'}
                      size="small"
                      sx={{
                        span: {
                          padding: '2px 4px'
                        },
                        borderRadius: 1,
                        background: '#F3F1F8',
                        color: '#6936D7',
                        ml: 1
                      }}
                    />
                  </Box>
                </TableCell>
                <TableCell>
                  <Box display="flex" alignItems="center" gap={0.5}>
                    <Typography variant="h5" noWrap fontWeight={400}>
                      11.5% →<b>12%</b>
                    </Typography>

                    <Chip
                      label={'+4.3%'}
                      size="small"
                      sx={{
                        span: {
                          padding: '2px 4px'
                        },
                        borderRadius: 1,
                        background: '#F3F1F8',
                        color: '#6936D7',
                        ml: 1
                      }}
                    />
                  </Box>
                </TableCell>
                <TableCell>
                  <Box display="flex" alignItems="center" gap={1}>
                    <Image
                      src="/icons/chevron-up-double.svg"
                      alt=""
                      height={28}
                      width={20}
                    />

                    <Typography variant="h4" fontWeight={400} color="primary">
                      134
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="right">
                  <UnfoldMoreIcon sx={{ fontSize: 20 }} />
                </TableCell>
              </TableRow>
            </>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default StyledTable;
