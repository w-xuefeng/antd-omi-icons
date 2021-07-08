// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SecurityScanFilledSvg from '@ant-design/icons-svg/es/asn/SecurityScanFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-security-scan-filled')
export default class SecurityScanFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'SecurityScanFilled';
  static tagName = 'o-security-scan-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={SecurityScanFilledSvg} />;
  };
}