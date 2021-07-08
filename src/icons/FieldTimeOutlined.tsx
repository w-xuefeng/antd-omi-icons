// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FieldTimeOutlinedSvg from '@ant-design/icons-svg/es/asn/FieldTimeOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-field-time-outlined')
export default class FieldTimeOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'FieldTimeOutlined';
  static tagName = 'o-field-time-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FieldTimeOutlinedSvg} />;
  };
}