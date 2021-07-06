// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import BellTwoToneSvg from '@ant-design/icons-svg/lib/asn/BellTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-bell-two-tone')
export default class BellTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'BellTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={BellTwoToneSvg}></AntdIcon>;
  };
}