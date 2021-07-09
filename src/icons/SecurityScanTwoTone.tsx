// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const SecurityScanTwoToneSvg = {"name":"security-scan","theme":"twotone"};

@tag('o-security-scan-two-tone')
export default class SecurityScanTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'SecurityScanTwoTone';
  static tagName = 'o-security-scan-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={SecurityScanTwoToneSvg} />;
  };
}