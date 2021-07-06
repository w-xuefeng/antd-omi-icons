// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ToTopOutlinedSvg from '@ant-design/icons-svg/lib/asn/ToTopOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-to-top-outlined')
export default class ToTopOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ToTopOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={ToTopOutlinedSvg}></AntdIcon>;
  };
}