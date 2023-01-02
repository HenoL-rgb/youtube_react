import React from 'react'
import {useMediaQuery} from '@mui/material';

export default function useViewport() {
    const isMobile = useMediaQuery('screen and (min-width: 1px) and (max-width: 513px)');
    const isTablet = useMediaQuery('screen and (min-width: 514px) and (max-width: 768px)');

  return (
    {
        isMobile,
        isTablet,
        isDesktop: !isMobile && !isTablet,
    }
  )
}
