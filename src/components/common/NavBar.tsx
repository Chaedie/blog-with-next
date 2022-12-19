import { Tab, Tabs, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

interface Props {}
interface NavTabs {
  [key: string]: number;
}

function NavBar() {
  const router = useRouter();

  return (
    <nav>
      <Box sx={{ borderBottom: 1, borderColor: 'primary' }}>
        <Tabs value={NAV_TABS[router.pathname]} aria-label="basic tabs example">
          <Link href="/">
            <Tab label="Blog" />
          </Link>
          <Link href="/about">
            <Tab label="About" />
          </Link>
          <Link href="/portfolio">
            <Tab label="Portfolio" />
          </Link>
        </Tabs>
      </Box>
    </nav>
  );
}

export default NavBar;

const NAV_TABS: NavTabs = { '/': 0, '/about': 1, '/portfolio': 2 };
