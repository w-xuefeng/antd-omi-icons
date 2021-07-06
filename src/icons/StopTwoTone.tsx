// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import StopTwoToneSvg from '@ant-design/icons-svg/lib/asn/StopTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-stop-two-tone')
export default class StopTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'StopTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={StopTwoToneSvg}></AntdIcon>;
  };
}