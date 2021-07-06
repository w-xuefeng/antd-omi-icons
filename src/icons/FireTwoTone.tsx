// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FireTwoToneSvg from '@ant-design/icons-svg/lib/asn/FireTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-fire-two-tone')
export default class FireTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'FireTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={FireTwoToneSvg}></AntdIcon>;
  };
}