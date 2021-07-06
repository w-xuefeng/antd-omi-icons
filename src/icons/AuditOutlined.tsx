// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import AuditOutlinedSvg from '@ant-design/icons-svg/lib/asn/AuditOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-audit-outlined')
export default class AuditOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'AuditOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={AuditOutlinedSvg}></AntdIcon>;
  };
}