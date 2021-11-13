import * as React from 'react';
import MuiSlider from '@mui/material/Slider';
import numeral from 'numeral';
import { ComponentDefinition } from '@ui-studio/types';

type Props = {
  defaultValue: number;
  step: number;
  marks: boolean;
  min: number;
  max: number;
  color: 'primary' | 'secondary';
  disabled: boolean;
  updateMode: 'drag' | 'release';
  valueLabelDisplay: 'auto' | 'off' | 'on';
  valueLabelFormat: string;
  onExposedPropertiesChange: (exposedProperties: Record<string, any>) => any;
}

const Slider: ComponentDefinition = {
  key: 'mui-slider',
  name: 'Slider',
  category: 'Inputs',
  icon: 'Tune',
  hasChildren: false,
  hasLayout: false,
  exposedProperties: [
    { property: 'value', schema: { type: 'number' } },
  ],
  config: [
    {
      key: 'defaultValue',
      label: 'Default value',
      defaultValue: 0,
      schema: { type: 'number' },
    },
    {
      key: 'step',
      label: 'Step',
      defaultValue: 1,
      schema: { type: 'number' },
    },
    {
      key: 'marks',
      label: 'Show marks',
      defaultValue: false,
      schema: { type: 'boolean' },
    },
    {
      key: 'min',
      label: 'Min value',
      defaultValue: 0,
      schema: { type: 'number' },
    },
    {
      key: 'max',
      label: 'Max value',
      defaultValue: 10,
      schema: { type: 'number' },
    },
    {
      key: 'color',
      label: 'Color',
      defaultValue: 'primary',
      schema: { type: 'string', enum: ['primary', 'secondary'] },
    },
    {
      key: 'disabled',
      label: 'Disabled',
      defaultValue: false,
      schema: { type: 'boolean' },
    },
    {
      key: 'updateMode',
      label: 'Update mode',
      defaultValue: 'release',
      schema: { type: 'string', enum: ['release', 'drag'] },
    },
    {
      key: 'valueLabelDisplay',
      label: 'Value label display',
      defaultValue: 'auto',
      schema: { type: 'string', enum: ['auto', 'off', 'on'] },
    },
    {
      key: 'valueLabelFormat',
      label: 'Value label format',
      defaultValue: '',
      schema: { type: 'string' },
    },
  ],
  component: ({ 
    defaultValue,
    step,
    marks,
    min,
    max,
    color,
    disabled,
    updateMode,
    valueLabelDisplay,
    valueLabelFormat,
    onExposedPropertiesChange,
  }: Props) => {
    const [value, setValue] = React.useState<number>(defaultValue || 0);

    const handleOnChange = (event: Event, newValue: number | number[]) => {
      setValue(newValue as number);
      if (updateMode === 'drag') onExposedPropertiesChange({ value: newValue as number });
    };

    const handleOnChangeCommitted = (event: Event, newValue: number | number[]) => {
      setValue(newValue as number);
      onExposedPropertiesChange({ value: newValue as number });
    };

    return (
      <MuiSlider
        value={value}
        onChange={handleOnChange}
        onChangeCommitted={handleOnChangeCommitted}
        step={step || 1}
        marks={marks}
        min={min || 0}
        max={max || 0}
        color={color || 'primary'}
        disabled={disabled}
        valueLabelDisplay={valueLabelDisplay || 'auto'}
        valueLabelFormat={v => valueLabelFormat ? numeral(v).format(valueLabelFormat) : v}
      />
    );
  },
};

export default Slider 