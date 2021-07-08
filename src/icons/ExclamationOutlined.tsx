// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ExclamationOutlinedSvg from '@ant-design/icons-svg/es/asn/ExclamationOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-exclamation-outlined')
export default class ExclamationOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ExclamationOutlined';
  static tagName = 'o-exclamation-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={ExclamationOutlinedSvg} />;
  };
}