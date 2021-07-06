// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FieldTimeOutlinedSvg from '@ant-design/icons-svg/lib/asn/FieldTimeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-field-time-outlined')
export default class FieldTimeOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'FieldTimeOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={FieldTimeOutlinedSvg}></AntdIcon>;
  };
}