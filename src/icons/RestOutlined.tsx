// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import RestOutlinedSvg from '@ant-design/icons-svg/lib/asn/RestOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-rest-outlined')
export default class RestOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'RestOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={RestOutlinedSvg}></AntdIcon>;
  };
}