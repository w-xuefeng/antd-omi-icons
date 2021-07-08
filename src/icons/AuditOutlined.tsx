// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import AuditOutlinedSvg from '@ant-design/icons-svg/es/asn/AuditOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-audit-outlined')
export default class AuditOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'AuditOutlined';
  static tagName = 'o-audit-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={AuditOutlinedSvg} />;
  };
}