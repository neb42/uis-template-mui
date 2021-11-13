import * as Icons from '@mui/icons-material';
import MuiButton from '@mui/material/Button';
import { ComponentDefinition } from '@ui-studio/types';


const FilteredIconKeys = Object.keys(Icons).filter(k => {
  if (k.endsWith('Outlined')) return false;
  if (k.endsWith('Rounded')) return false;
  if (k.endsWith('TwoTone')) return false;
  if (k.endsWith('Sharp')) return false;
  return true;
});

type Props = {
  text: string; 
  variant: 'contained' | 'outlined' | 'text';
  size: 'small' | 'medium' | 'large'; 
  color: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';
  startIcon: typeof FilteredIconKeys[number], 
  endIcon: typeof FilteredIconKeys[number], 
  iconStyle: 'Filled' | 'Outlined' | 'Rounded' | 'TwoTone' | 'Sharp';
  disabled: boolean;
  fullWidth: boolean;
  onClick: () => any;
}

const Button: ComponentDefinition = {
  key: 'mui-button',
  name: 'Button',
  category: 'Inputs',
  icon: 'TouchAppRounded',
  hasChildren: false,
  hasLayout: false,
  events: [{ key: 'onClick', label: 'onClick' }],
  config: [
    {
      key: 'text',
      label: 'Text',
      defaultValue: 'Click me',
      schema: { type: 'string' },
    },
    {
      key: 'variant',
      label: 'Variant',
      defaultValue: 'contained',
      schema: { type: 'string', enum: ['contained', 'outlined', 'text'] },
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
      key: 'startIcon',
      label: 'Start icon',
      defaultValue: 'None',
      schema: { type: 'string', enum: ['None', ...FilteredIconKeys] },
    },
    {
      key: 'endIcon',
      label: 'End icon',
      defaultValue: 'None',
      schema: { type: 'string', enum: ['None', ...FilteredIconKeys] },
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
      key: 'fullWidth',
      label: 'Full width',
      defaultValue: false,
      schema: { type: 'boolean' },
    },
  ],
  component: ({ text, variant, size, color, startIcon, endIcon, iconStyle, disabled, fullWidth, onClick }: Props) => {
    const handleOnClick = () => {
      onClick();
    };

    const StartIcon = Icons[`${startIcon}${iconStyle === 'Filled' ? '' : iconStyle}`];
    const EndIcon = Icons[`${endIcon}${iconStyle === 'Filled' ? '' : iconStyle}`];

    return (
      <MuiButton
        variant={variant}
        size={size}
        color={color}
        startIcon={StartIcon ? <StartIcon /> : undefined}
        endIcon={EndIcon ? <EndIcon /> : undefined}
        disabled={disabled}
        fullWidth={fullWidth}
        onClick={handleOnClick}
      >
        {text}
      </MuiButton>
    );
  },
};

export default Button 