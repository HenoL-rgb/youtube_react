import * as React from 'react';
import { styled } from '@mui/material/styles';
import Switch, { SwitchProps } from '@mui/material/Switch';

const AntSwitch = styled(Switch)(({ theme, width, height, translate }) => ({
    width: width,
    height: height,
    padding: 0,
    display: 'flex',
    '&:active': {
      '& .MuiSwitch-thumb': {
        width: height - 4,
      },
      '& .MuiSwitch-switchBase.Mui-checked': {
        transform: 'translateX(2px)',
      },
    },
    '& .MuiSwitch-switchBase': {
      padding: 2,
      '&.Mui-checked': {
        transform: `translateX(${translate}px)`,
        color: '#fff',
        '& + .MuiSwitch-track': {
          opacity: 0.3,
          backgroundColor: theme.palette.mode === 'dark' ? '#EBEBEB' : '#EBEBEB',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
      width: height - 4,
      height: height - 4,
      borderRadius: height / 2,
      transition: theme.transitions.create(['width'], {
        duration: 200,
      }),
      backgroundColor: theme.palette.mode === 'dark' ? '#2196F3' : '#2196F3',
    },
    '& .MuiSwitch-track': {
      borderRadius: 14,
      opacity: 1,
      backgroundColor: '#EBEBEB',
      boxSizing: 'border-box',
    },
  }));

  export default AntSwitch;