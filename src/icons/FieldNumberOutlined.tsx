// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FieldNumberOutlinedSvg from '@ant-design/icons-svg/lib/asn/FieldNumberOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-field-number-outlined')
export default class FieldNumberOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'FieldNumberOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FieldNumberOutlinedSvg} />;
  };
}