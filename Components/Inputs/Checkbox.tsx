import * as React from 'react';
import MuiCheckbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { ComponentDefinition } from '@ui-studio/types';

type Props = {
  label: string; 
  size: 'small' | 'medium'; 
  color: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';
  defaultChecked: boolean;
  disabled: boolean;
  onExposedPropertiesChange: (exposedProperties: Record<string, any>) => any;
}

const Checkbox: ComponentDefinition = {
  key: 'mui-checkbox',
  name: 'Checkbox',
  category: 'Inputs',
  icon: 'CheckBox',
  hasChildren: false,
  hasLayout: false,
  exposedProperties: [
    { property: 'checked', schema: { type: 'boolean' } },
  ],
  config: [
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
      key: 'defaultChecked',
      label: 'Default checked',
      defaultValue: true,
      schema: { type: 'boolean' },
    },
  ],
  component: ({ label, size, color, defaultChecked, disabled, onExposedPropertiesChange }: Props) => {
    const [checked, setChecked] = React.useState(defaultChecked);

    React.useEffect(() => {
      onExposedPropertiesChange({ checked });
    }, [checked]);

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked(event.target.checked);
    };

    return (
      <FormGroup>
        <FormControlLabel
          label={label}
          disabled={disabled}
          control={<MuiCheckbox size={size} color={color} checked={checked} onChange={handleOnChange} />}
        />
      </FormGroup>
    );
  },
};

export default Checkbox 