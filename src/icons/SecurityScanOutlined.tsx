// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SecurityScanOutlinedSvg from '@ant-design/icons-svg/lib/asn/SecurityScanOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-security-scan-outlined')
export default class SecurityScanOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'SecurityScanOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={SecurityScanOutlinedSvg} />;
  };
}