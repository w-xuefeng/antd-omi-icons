// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FieldNumberOutlinedSvg from '@ant-design/icons-svg/lib/asn/FieldNumberOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-field-number-outlined')
export default class FieldNumberOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'FieldNumberOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={FieldNumberOutlinedSvg}></AntdIcon>;
  };
}