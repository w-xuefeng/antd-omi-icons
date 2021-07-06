// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import HddTwoToneSvg from '@ant-design/icons-svg/lib/asn/HddTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-hdd-two-tone')
export default class HddTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'HddTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={HddTwoToneSvg}></AntdIcon>;
  };
}