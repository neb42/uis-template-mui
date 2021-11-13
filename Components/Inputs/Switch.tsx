import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import MuiSwitch from '@mui/material/Switch';
import { ComponentDefinition } from '@ui-studio/types';

type Props = {
  defaultChecked: boolean;
  label: string;
  size: 'small' | 'medium'; 
  color: 'primary'
  | 'secondary'
  | 'error'
  | 'info'
  | 'success'
  | 'warning';
  disabled: boolean;
  updateMode: 'drag' | 'release';
  checkedLabelDisplay: 'auto' | 'off' | 'on';
  checkedLabelFormat: string;
  onExposedPropertiesChange: (exposedProperties: Record<string, any>) => any;
}

const Switch: ComponentDefinition = {
  key: 'mui-switch',
  name: 'Switch',
  category: 'Inputs',
  icon: 'ToggleOn',
  hasChildren: false,
  hasLayout: false,
  exposedProperties: [
    { property: 'checked', schema: { type: 'number' } },
  ],
  config: [
    {
      key: 'defaultChecked',
      label: 'Default checked',
      defaultValue: true,
      schema: { type: 'boolean' },
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
      schema: { type: 'string', enum: ['primary', 'secondary', 'error', 'info', 'success', 'warning'] },
    },
    {
      key: 'disabled',
      label: 'Disabled',
      defaultValue: false,
      schema: { type: 'boolean' },
    },
  ],
  component: ({ 
    defaultChecked,
    label,
    size,
    color,
    disabled,
    onExposedPropertiesChange,
  }: Props) => {
    const [checked, setChecked] = React.useState<boolean>(defaultChecked);

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked(event.target.checked);
      onExposedPropertiesChange({ checked });
    };

    return (
      <FormGroup>
        <FormControlLabel 
          control={
            <MuiSwitch
              checked={checked}
              onChange={handleOnChange}
              size={size}
              color={color || 'primary'}
              disabled={disabled}
            />
          }
          label={label}
        />
      </FormGroup>
    );
  },
};

export default Switch 