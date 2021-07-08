// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SafetyCertificateFilledSvg from '@ant-design/icons-svg/es/asn/SafetyCertificateFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-safety-certificate-filled')
export default class SafetyCertificateFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'SafetyCertificateFilled';
  static tagName = 'o-safety-certificate-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={SafetyCertificateFilledSvg} />;
  };
}