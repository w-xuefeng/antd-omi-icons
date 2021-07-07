// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SafetyCertificateTwoToneSvg from '@ant-design/icons-svg/lib/asn/SafetyCertificateTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-safety-certificate-two-tone')
export default class SafetyCertificateTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'SafetyCertificateTwoTone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={SafetyCertificateTwoToneSvg} />;
  };
}