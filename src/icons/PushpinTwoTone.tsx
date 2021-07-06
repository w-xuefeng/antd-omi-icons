// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import PushpinTwoToneSvg from '@ant-design/icons-svg/lib/asn/PushpinTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-pushpin-two-tone')
export default class PushpinTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'PushpinTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={PushpinTwoToneSvg}></AntdIcon>;
  };
}