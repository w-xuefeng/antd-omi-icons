// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ApiOutlinedSvg from '@ant-design/icons-svg/lib/asn/ApiOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-api-outlined')
export default class ApiOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ApiOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={ApiOutlinedSvg}></AntdIcon>;
  };
}