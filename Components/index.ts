import { parseComponents } from '@ui-studio/typescript';

import Button from './Inputs/Button';
import Checkbox from './Inputs/Checkbox';
import MultiLineTextField from './Inputs/MultiLineTextField';
import RadioButton from './Inputs/RadioButton';
import RangeSlider from './Inputs/RangeSlider';
import Select from './Inputs/Select';
import Slider from './Inputs/Slider';
import Switch from './Inputs/Switch';
import TextField from './Inputs/TextField';
import ToggleButton from './Inputs/ToggleButton';

const Components = parseComponents([
  Button,
  Checkbox,
  MultiLineTextField,
  RadioButton,
  RangeSlider,
  Select,
  Slider,
  Switch,
  TextField,
  ToggleButton,
]);

export default Components;
