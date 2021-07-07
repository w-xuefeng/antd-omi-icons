// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FieldStringOutlinedSvg from '@ant-design/icons-svg/lib/asn/FieldStringOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-field-string-outlined')
export default class FieldStringOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'FieldStringOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FieldStringOutlinedSvg} />;
  };
}