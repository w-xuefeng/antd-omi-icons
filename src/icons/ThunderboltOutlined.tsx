// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ThunderboltOutlinedSvg from '@ant-design/icons-svg/lib/asn/ThunderboltOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-thunderbolt-outlined')
export default class ThunderboltOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ThunderboltOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={ThunderboltOutlinedSvg}></AntdIcon>;
  };
}