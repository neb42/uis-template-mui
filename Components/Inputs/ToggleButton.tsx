import * as React from 'react';
import * as Icons from '@mui/icons-material';
import MuiToggleButton from '@mui/material/ToggleButton';
import MuiToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { ComponentDefinition } from '@ui-studio/types';


const FilteredIconKeys = Object.keys(Icons).filter(k => {
  if (k.endsWith('Outlined')) return false;
  if (k.endsWith('Rounded')) return false;
  if (k.endsWith('TwoTone')) return false;
  if (k.endsWith('Sharp')) return false;
  return true;
});

type Props = {
  options: { value: string; icon: string; }[];
  defaultValue: string;
  size: 'small' | 'medium' | 'large'; 
  color: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';
  iconStyle: 'Filled' | 'Outlined' | 'Rounded' | 'TwoTone' | 'Sharp';
  orientation: 'horizontal' | 'vertical';
  disabled: boolean;
  required: boolean;
  fullWidth: boolean;
  onClick: () => any;
}

const ToggleButton: ComponentDefinition = {
  key: 'mui-toggle-button',
  name: 'Toggle button',
  category: 'Inputs',
  icon: 'TouchAppRounded',
  hasChildren: false,
  hasLayout: false,
  events: [{ key: 'onClick', label: 'onClick' }],
  config: [
    {
      key: 'options',
      label: 'Options',
      defaultValue: {
        value: '',
        icon: FilteredIconKeys[0],
      },
      schema: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            value: { type: 'string' },
            icon: { type: 'string' },
          },
        },
      },
    },
    {
      key: 'size',
      label: 'Size',
      defaultValue: 'medium',
      schema: { type: 'string', enum: ['small', 'medium', 'large'] },
    },
    {
      key: 'color',
      label: 'Color',
      defaultValue: 'primary',
      schema: { type: 'string', enum: ['primary', 'secondary', 'info', 'success', 'warning', 'error'] },
    },
    {
      key: 'iconStyle',
      label: 'Icon style',
      defaultValue: 'Filled',
      schema: { type: 'string', enum: ['Filled', 'Outlined', 'Rounded', 'TwoTone', 'Sharp'] },
    },
    {
      key: 'disabled',
      label: 'Disabled',
      defaultValue: false,
      schema: { type: 'boolean' },
    },
    {
      key: 'required',
      label: 'Required',
      defaultValue: false,
      schema: { type: 'boolean' },
    },
    {
      key: 'fullWidth',
      label: 'Full width',
      defaultValue: false,
      schema: { type: 'boolean' },
    },
  ],
  component: ({ options, defaultValue, size, color, iconStyle, orientation, disabled, required, fullWidth }: Props) => {
    const [value, setValue] = React.useState<string | null>(options?.[0]?.value || null);

    React.useEffect(() => {
      const defaultOption = options.find(o => o.value === defaultValue);
      if (defaultOption) setValue(defaultValue);
      else if (required) setValue(options[0]?.value);
      else setValue(null);
    }, [defaultValue, JSON.stringify(options)]);

    const handleOnChange = (
      event: React.MouseEvent<HTMLElement>,
      newValue: string | null,
    ) => {
      if (required && newValue === null) return;
      setValue(newValue);
    };

    return (
      <MuiToggleButtonGroup
        exclusive
        size={size}
        color={color}
        orientation={orientation}
        disabled={disabled}
        fullWidth={fullWidth}
        value={value}
        onChange={handleOnChange}
      >
        {options.map(option => {
          const Icon = Icons[`${option.icon}${iconStyle === 'Filled' ? '' : iconStyle}`];
          return (
            <MuiToggleButton value={option.value}>
              <Icon />
            </MuiToggleButton>
          );
        })}
      </MuiToggleButtonGroup> 
    );
  },
};

export default ToggleButton 