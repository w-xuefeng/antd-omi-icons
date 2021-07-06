// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SecurityScanFilledSvg from '@ant-design/icons-svg/lib/asn/SecurityScanFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-security-scan-filled')
export default class SecurityScanFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'SecurityScanFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={SecurityScanFilledSvg}></AntdIcon>;
  };
}