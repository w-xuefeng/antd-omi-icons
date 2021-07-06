// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import HeartFilledSvg from '@ant-design/icons-svg/lib/asn/HeartFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-heart-filled')
export default class HeartFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'HeartFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={HeartFilledSvg}></AntdIcon>;
  };
}