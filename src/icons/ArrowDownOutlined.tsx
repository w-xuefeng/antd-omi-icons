// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ArrowDownOutlinedSvg from '@ant-design/icons-svg/lib/asn/ArrowDownOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-arrow-down-outlined')
export default class ArrowDownOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ArrowDownOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={ArrowDownOutlinedSvg}></AntdIcon>;
  };
}