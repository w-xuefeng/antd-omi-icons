// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DollarTwoToneSvg from '@ant-design/icons-svg/lib/asn/DollarTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-dollar-two-tone')
export default class DollarTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'DollarTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={DollarTwoToneSvg}></AntdIcon>;
  };
}