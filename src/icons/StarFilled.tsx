// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import StarFilledSvg from '@ant-design/icons-svg/lib/asn/StarFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-star-filled')
export default class StarFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'StarFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={StarFilledSvg}></AntdIcon>;
  };
}