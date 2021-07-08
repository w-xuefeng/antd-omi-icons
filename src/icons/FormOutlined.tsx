// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FormOutlinedSvg from '@ant-design/icons-svg/es/asn/FormOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-form-outlined')
export default class FormOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'FormOutlined';
  static tagName = 'o-form-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FormOutlinedSvg} />;
  };
}