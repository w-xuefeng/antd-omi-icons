// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import PushpinFilledSvg from '@ant-design/icons-svg/lib/asn/PushpinFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-pushpin-filled')
export default class PushpinFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'PushpinFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={PushpinFilledSvg}></AntdIcon>;
  };
}