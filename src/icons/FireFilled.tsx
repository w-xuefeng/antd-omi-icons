// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FireFilledSvg from '@ant-design/icons-svg/lib/asn/FireFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-fire-filled')
export default class FireFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'FireFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={FireFilledSvg}></AntdIcon>;
  };
}