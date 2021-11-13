import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import MuiSelect, { SelectChangeEvent } from '@mui/material/Select';
import { ComponentDefinition } from '@ui-studio/types';

type Props = {
  label: string; 
  variant: 'outlined' | 'filled' | 'standard'; 
  options: { value: string; label: string; }[];
  onExposedPropertiesChange: (exposedProperties: Record<string, any>) => any;
}

const Select: ComponentDefinition = {
  key: 'mui-select',
  name: 'Select',
  category: 'Inputs',
  icon: 'List',
  hasChildren: false,
  hasLayout: false,
  exposedProperties: [
    { property: 'checked', schema: { type: 'boolean' } },
  ],
  config: [
    {
      key: 'options',
      label: 'Options',
      defaultValue: {
        value: '',
        label: '',
      },
      schema: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            value: { type: 'string' },
            label: { type: 'string' },
          },
        },
      },
    },
    {
      key: 'label',
      label: 'Label',
      defaultValue: '',
      schema: { type: 'string' },
    },
    {
      key: 'variant',
      label: 'Variant',
      defaultValue: 'outlined',
      schema: { type: 'string', enum: ['outlined', 'filled', 'standard'] },
    },
  ],
  component: ({ label, variant, options, onExposedPropertiesChange }: Props) => {
    const [value, setValue] = React.useState(options.find(o => o.value === value)?.label);

    React.useEffect(() => {
      onExposedPropertiesChange({
        selectedValue: value,
        selectedLabel: options.find(o => o.value === value)?.label,
      });
    }, [value]);

    React.useEffect(() => {
      setValue(options[0]?.value);
    }, [JSON.stringify(options)]);

    const handleOnChange = (event: SelectChangeEvent) => {
      setValue(event.target.value as string);
    };

    return (
      <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <MuiSelect
          value={value}
          label={label}
          variant={variant}
          onChange={handleOnChange}
        >
          {options.map(option => (
            <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
          ))}
        </MuiSelect>
      </FormControl>
    );
  },
};

export default Select 