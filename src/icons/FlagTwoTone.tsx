// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FlagTwoToneSvg from '@ant-design/icons-svg/lib/asn/FlagTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-flag-two-tone')
export default class FlagTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'FlagTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={FlagTwoToneSvg}></AntdIcon>;
  };
}