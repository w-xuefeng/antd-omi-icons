// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ExpandOutlinedSvg from '@ant-design/icons-svg/lib/asn/ExpandOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-expand-outlined')
export default class ExpandOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ExpandOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={ExpandOutlinedSvg}></AntdIcon>;
  };
}