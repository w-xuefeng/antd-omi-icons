// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FieldBinaryOutlinedSvg from '@ant-design/icons-svg/es/asn/FieldBinaryOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-field-binary-outlined')
export default class FieldBinaryOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'FieldBinaryOutlined';
  static tagName = 'o-field-binary-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FieldBinaryOutlinedSvg} />;
  };
}