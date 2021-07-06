// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import QqOutlinedSvg from '@ant-design/icons-svg/lib/asn/QqOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-qq-outlined')
export default class QqOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'QqOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={QqOutlinedSvg}></AntdIcon>;
  };
}