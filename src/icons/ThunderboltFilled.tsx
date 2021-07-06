// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ThunderboltFilledSvg from '@ant-design/icons-svg/lib/asn/ThunderboltFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-thunderbolt-filled')
export default class ThunderboltFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'ThunderboltFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={ThunderboltFilledSvg}></AntdIcon>;
  };
}