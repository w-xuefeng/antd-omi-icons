// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SafetyCertificateOutlinedSvg from '@ant-design/icons-svg/es/asn/SafetyCertificateOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-safety-certificate-outlined')
export default class SafetyCertificateOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'SafetyCertificateOutlined';
  static tagName = 'o-safety-certificate-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={SafetyCertificateOutlinedSvg} />;
  };
}