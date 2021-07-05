// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SecurityScanTwoToneSvg from '@ant-design/icons-svg/lib/asn/SecurityScanTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-security-scan-two-tone')
export default class SecurityScanTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'SecurityScanTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={SecurityScanTwoToneSvg}></AntdIcon>;
  };
}