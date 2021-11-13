import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { ComponentDefinition } from '@ui-studio/types';

type Props = {
  label: string; 
  size: 'small' | 'medium'; 
  color: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';
  defaultValue: string;
  options: { value: string; label: string; }[];
  disabled: boolean;
  onExposedPropertiesChange: (exposedProperties: Record<string, any>) => any;
}

const Checkbox: ComponentDefinition = {
  key: 'mui-radio-button',
  name: 'Radio button',
  category: 'Inputs',
  icon: 'RadioButtonChecked',
  hasChildren: false,
  hasLayout: false,
  exposedProperties: [
    { property: 'selectedValue', schema: { type: 'string' } },
    { property: 'selectedLabel', schema: { type: 'string' } },
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
      key: 'size',
      label: 'Size',
      defaultValue: 'medium',
      schema: { type: 'string', enum: ['small', 'medium'] },
    },
    {
      key: 'color',
      label: 'Color',
      defaultValue: 'primary',
      schema: { type: 'string', enum: ['primary', 'secondary', 'info', 'success', 'warning', 'error'] },
    },
    {
      key: 'disabled',
      label: 'Disabled',
      defaultValue: false,
      schema: { type: 'boolean' },
    },
    {
      key: 'defaultValue',
      label: 'Default value',
      defaultValue: '',
      schema: { type: 'string' },
    },
  ],
  component: ({ label, size, color, defaultValue, options, disabled, onExposedPropertiesChange }: Props) => {
    const [value, setValue] = React.useState(defaultValue);

    React.useEffect(() => {
      onExposedPropertiesChange({
        selectedValue: value,
        selectedLabel: options.find(o => o.value === value)?.label,
      });
    }, [value]);

    React.useEffect(() => {
      const defaultOption = options.find(o => o.value === defaultValue);
      if (defaultOption) setValue(defaultValue);
      else setValue(options[0]?.value);
    }, [defaultValue, JSON.stringify(options)]);

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue((event.target as HTMLInputElement).value);
    };

    return (
      <FormControl component="fieldset">
        <FormLabel component="legend">{label}</FormLabel>
          <RadioGroup value={value} onChange={handleOnChange}>
            {options.map(o => (
              <FormControlLabel
                key={o.value}
                value={o.value}
                label={o.label}
                control={<Radio color={color} size={size} disabled={disabled} />}
              />
            ))}
          </RadioGroup>
        </FormControl>
    );
  },
};

export default Checkbox 