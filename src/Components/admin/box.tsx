import * as React from 'react';
import { Box as MuiBox, styled } from '@mui/material';

export const Box = styled(MuiBox)`
sx={(theme) => ({
    '--bg': theme.vars.palette.background.level3,
    height: '1px',
    background: 'var(--bg)',
    boxShadow: '0 0 0 100vmax var(--bg)',
    clipPath: 'inset(0 -100vmax)',
  })}
`;