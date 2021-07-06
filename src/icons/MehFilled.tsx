// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import MehFilledSvg from '@ant-design/icons-svg/lib/asn/MehFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-meh-filled')
export default class MehFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'MehFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={MehFilledSvg}></AntdIcon>;
  };
}