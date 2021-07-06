// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ShrinkOutlinedSvg from '@ant-design/icons-svg/lib/asn/ShrinkOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-shrink-outlined')
export default class ShrinkOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ShrinkOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={ShrinkOutlinedSvg}></AntdIcon>;
  };
}