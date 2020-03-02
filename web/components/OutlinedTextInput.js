import React, { useState, useEffect, useRef } from 'react';
import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Icon,
} from '@material-ui/core';
import styled from 'styled-components';

const InputWrapper = styled.div`
  border: 0;
  margin: 0;
  display: inline-flex;
  padding: 0;
  position: relative;
  min-width: 0;
  width: 100%;
  flex-direction: column;
  vertical-align: top;
  margin-bottom: 20px;
  .MuiFormControl-root {
    .MuiFormLabel-root {
      color: #4db5da;
      font-weight: bold;
    }
    .Mui-focused {
      .MuiOutlinedInput-notchedOutline {
        border: 2px solid #4db5da;
      }
    }
    .Mui-error {
      .MuiOutlinedInput-notchedOutline {
        border: 2px solid red !important;
      }
    }
    .MuiOutlinedInput-root {
      .MuiOutlinedInput-notchedOutline {
        border: 1px solid #4db5da;
      }
      .MuiInputAdornment-root {
        color: #4db5da;
      }
      .MuiOutlinedInput-input {
        color: #4db5da;
      }
    }
  }
`;

const HelperText = styled.small`
  color: ${props => (props.error ? 'red' : '#838596')};
`;

export const OutlinedTextInput = ({
  value,
  onChange,
  label,
  type = 'text',
  error = '',
  helperText = '',
  fullWidth = true,
  Icon = null,
  ...rest
}) => {
  const labelRef = useRef(null);
  const [labelWidth, setLabelWidth] = useState(0);
  useEffect(() => {
    if (!labelRef.current !== null) {
      setLabelWidth(labelRef.current.offsetWidth);
    }
  }, []);

  return (
    <InputWrapper>
      <FormControl variant="outlined">
        <InputLabel ref={labelRef}>{label}</InputLabel>
        <OutlinedInput
          type={type}
          value={value}
          onChange={onChange}
          labelWidth={labelWidth}
          error={!!error}
          fullWidth
          startAdornment={
            Icon ? (
              <InputAdornment position="start">
                <Icon />
              </InputAdornment>
            ) : null
          }
          {...rest}
        />
        <HelperText error={error}>{error ? error : helperText}</HelperText>
      </FormControl>
    </InputWrapper>
  );
};
