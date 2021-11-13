import * as React from 'react';
import MuiTextField from '@mui/material/TextField';
import { ComponentDefinition } from '@ui-studio/types';

type Props = {
  defaultValue: string;
  autoComplete: string;
  placeholder: string;
  color: 'primary'
  | 'secondary'
  | 'error'
  | 'info'
  | 'success'
  | 'warning';
  variant: 'filled' | 'outlined' | 'standard';
  disabled: boolean;
  error: boolean;
  fullWidth: boolean;
  autoFocus: boolean;
  minRows: number;
  maxRows: number;
  onExposedPropertiesChange: (exposedProperties: Record<string, any>) => any;
}

const MultilineTextField: ComponentDefinition = {
  key: 'mui-multiline-text-field',
  name: 'Multiline text field',
  category: 'Inputs',
  icon: 'TextFields',
  hasChildren: false,
  hasLayout: false,
  exposedProperties: [
    { property: 'value', schema: { type: 'number' } },
  ],
  config: [
    {
      key: 'defaultValue',
      label: 'Default value',
      defaultValue: '',
      schema: { type: 'string' },
    },
    {
      key: 'autoComplete',
      label: 'Auto complete',
      defaultValue: '',
      schema: { type: 'string' },
    },
    {
      key: 'placeholder',
      label: 'Placeholder',
      defaultValue: '',
      schema: { type: 'string' },
    },
    {
      key: 'variant',
      label: 'Variant',
      defaultValue: 'outlined',
      schema: { type: 'string', enum: ['outlined', 'filled', 'standard'] },
    },
    {
      key: 'color',
      label: 'Color',
      defaultValue: 'primary',
      schema: { type: 'string', enum: ['primary', 'secondary', 'error', 'info', 'success', 'warning'] },
    },
    {
      key: 'disabled',
      label: 'Disabled',
      defaultValue: false,
      schema: { type: 'boolean' },
    },
    {
      key: 'error',
      label: 'Error',
      defaultValue: false,
      schema: { type: 'boolean' },
    },
    {
      key: 'fullWidth',
      label: 'Full width',
      defaultValue: false,
      schema: { type: 'boolean' },
    },
    {
      key: 'autoFocus',
      label: 'Auto focus',
      defaultValue: false,
      schema: { type: 'boolean' },
    },
    {
      key: 'minRows',
      label: 'Min rows',
      defaultValue: 5,
      schema: { type: 'number' },
    },
    {
      key: 'maxRows',
      label: 'Max rows',
      defaultValue: 5,
      schema: { type: 'number' },
    },
  ],
  component: ({ 
    defaultValue,
    autoComplete,
    placeholder,
    color,
    disabled,
    error,
    fullWidth,
    autoFocus,
    variant,
    minRows,
    maxRows,
    onExposedPropertiesChange,
  }: Props) => {
    const [value, setValue] = React.useState<string>(defaultValue || '');

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
      onExposedPropertiesChange({ value: event.target.value });
    };

    return (
      <MuiTextField
        value={value}
        multiline
        autoComplete={autoComplete}
        placeholder={placeholder}
        onChange={handleOnChange}
        color={color || 'primary'}
        disabled={disabled}
        error={error}
        fullWidth={fullWidth}
        autoFocus={autoFocus}
        minRows={minRows}
        maxRows={maxRows}
        variant={variant || 'outlined'}
      />
    );
  },
};

export default MultilineTextField 