// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import AlertOutlinedSvg from '@ant-design/icons-svg/es/asn/AlertOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-alert-outlined')
export default class AlertOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'AlertOutlined';
  static tagName = 'o-alert-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={AlertOutlinedSvg} />;
  };
}