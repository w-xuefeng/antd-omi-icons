// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import IeOutlinedSvg from '@ant-design/icons-svg/lib/asn/IeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-ie-outlined')
export default class IeOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'IeOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={IeOutlinedSvg}></AntdIcon>;
  };
}