// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import LayoutFilledSvg from '@ant-design/icons-svg/lib/asn/LayoutFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-layout-filled')
export default class LayoutFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'LayoutFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={LayoutFilledSvg}></AntdIcon>;
  };
}