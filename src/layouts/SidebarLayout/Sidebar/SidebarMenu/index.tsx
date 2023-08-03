import { useContext } from 'react';
import { useRouter } from 'next/router';

import {
  ListSubheader,
  alpha,
  Box,
  List,
  styled,
  Button,
  ListItem
} from '@mui/material';
import NextLink from 'next/link';
import { SidebarContext } from 'src/contexts/SidebarContext';

import BrightnessLowTwoToneIcon from '@mui/icons-material/BrightnessLowTwoTone';
import MmsTwoToneIcon from '@mui/icons-material/MmsTwoTone';
import Image from 'next/image';

const MenuWrapper = styled(Box)(
  ({ theme }) => `
  .MuiList-root {
    padding: ${theme.spacing(1)};

    & > .MuiList-root {
      padding: 0 ${theme.spacing(0)} ${theme.spacing(1)};
    }
  }

    .MuiListSubheader-root {
      font-weight: 400;
      font-size: ${theme.typography.pxToRem(14)};
      color: rgba(33, 33, 35, 0.70);
      padding: ${theme.spacing(0, 2.5)};
      line-height: 1.4;
    }
`
);

const SubMenuWrapper = styled(Box)(
  ({ theme }) => `
    .MuiList-root {

      .MuiListItem-root {
        padding: 1px 0;

        .MuiBadge-root {
          position: absolute;
          right: ${theme.spacing(3.2)};

          .MuiBadge-standard {
            background: ${theme.colors.primary.main};
            font-size: ${theme.typography.pxToRem(10)};
            font-weight: bold;
            text-transform: uppercase;
            color: ${theme.palette.primary.contrastText};
          }
        }
    
        .MuiButton-root {
          font-weight: 400;
          display: flex;
          color: ${theme.colors.alpha.trueWhite[70]};
          background-color: transparent;
          width: 100%;
          justify-content: flex-start;
          padding: ${theme.spacing(1, 2)};

          .MuiButton-startIcon,
          .MuiButton-endIcon {
            transition: ${theme.transitions.create(['color'])};

            .MuiSvgIcon-root {
              font-size: inherit;
              transition: none;
            }
          }

          .MuiButton-startIcon {
            color: ${theme.colors.alpha.trueWhite[30]};
            font-size: ${theme.typography.pxToRem(20)};
            margin-right: ${theme.spacing(1)};
          }
          
          .MuiButton-endIcon {
            color: ${theme.colors.alpha.trueWhite[50]};
            margin-left: auto;
            opacity: .8;
            font-size: ${theme.typography.pxToRem(20)};
          }

          &.non-active {
            color: #212123;
            border: 1px solid transparent;

            .MuiButton-startIcon,
            .MuiButton-endIcon {
              color: #212123;
            }
          }

          &.active,
          &:hover {
            background-color: #FFF;
            color: #212123;
            border: 1px solid rgba(127, 83, 221, 0.20);
            box-shadow: 0px 1px 6px 0px rgba(127, 83, 221, 0.12);

            .MuiButton-startIcon,
            .MuiButton-endIcon {
              color: #212123;
            }
          }
        }

        &.Mui-children {
          flex-direction: column;

          .MuiBadge-root {
            position: absolute;
            right: ${theme.spacing(7)};
          }
        }

        .MuiCollapse-root {
          width: 100%;

          .MuiList-root {
            padding: ${theme.spacing(1, 0)};
          }

          .MuiListItem-root {
            padding: 1px 0;

            .MuiButton-root {
              padding: ${theme.spacing(0.8, 3)};

              .MuiBadge-root {
                right: ${theme.spacing(3.2)};
              }

              &:before {
                content: ' ';
                background: ${theme.colors.alpha.trueWhite[100]};
                opacity: 0;
                transition: ${theme.transitions.create([
                  'transform',
                  'opacity'
                ])};
                width: 6px;
                height: 6px;
                transform: scale(0);
                transform-origin: center;
                border-radius: 20px;
                margin-right: ${theme.spacing(1.8)};
              }

              &.active,
              &:hover {

                &:before {
                  transform: scale(1);
                  opacity: 1;
                }
              }
            }
          }
        }
      }
    }
`
);

function SidebarMenu() {
  const { closeSidebar } = useContext(SidebarContext);
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <>
      <MenuWrapper>
        <List component="div">
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <NextLink href="/today" passHref>
                  <Button
                    className={
                      currentRoute === '/today' ? 'active' : 'non-active'
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={
                      <Image
                        src="/icons/calendar.svg"
                        alt=""
                        width={20}
                        height={20}
                      />
                    }
                  >
                    Today
                  </Button>
                </NextLink>
              </ListItem>
              <ListItem component="div">
                <NextLink href="/notifications" passHref>
                  <Button
                    className={
                      currentRoute === '/notifications'
                        ? 'active'
                        : 'non-active'
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={
                      <Image
                        src="/icons/bell.svg"
                        alt=""
                        width={20}
                        height={20}
                      />
                    }
                  >
                    Notifications
                  </Button>
                </NextLink>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List>
        <List
          component="div"
          subheader={
            <ListSubheader component="div" disableSticky>
              Deepdives
            </ListSubheader>
          }
        >
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <NextLink href="/onboarding" passHref>
                  <Button
                    className={
                      currentRoute === '/onboarding' ? 'active' : 'non-active'
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={
                      <Image
                        src="/icons/user-circle-plus.svg"
                        alt=""
                        width={20}
                        height={20}
                      />
                    }
                  >
                    Onboarding
                  </Button>
                </NextLink>
              </ListItem>
              <ListItem component="div">
                <NextLink href="/acquisition" passHref>
                  <Button
                    className={
                      currentRoute === '/acquisition' ? 'active' : 'non-active'
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={
                      <Image
                        src="/icons/package.svg"
                        alt=""
                        width={20}
                        height={20}
                      />
                    }
                  >
                    Acquisition
                  </Button>
                </NextLink>
              </ListItem>
              <ListItem component="div">
                <NextLink href="/activation" passHref>
                  <Button
                    className={
                      currentRoute === '/activation' ? 'active' : 'non-active'
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={
                      <Image
                        src="/icons/identification-card.svg"
                        alt=""
                        width={20}
                        height={20}
                      />
                    }
                  >
                    Activation
                  </Button>
                </NextLink>
              </ListItem>
              <ListItem component="div">
                <NextLink href="/retention" passHref>
                  <Button
                    className={
                      currentRoute === '/retention' ? 'active' : 'non-active'
                    }
                    disableRipple
                    component="a"
                    onClick={closeSidebar}
                    startIcon={
                      <Image
                        src="/icons/magnet.svg"
                        alt=""
                        width={20}
                        height={20}
                      />
                    }
                  >
                    Retention
                  </Button>
                </NextLink>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List>
      </MenuWrapper>
    </>
  );
}

export default SidebarMenu;
