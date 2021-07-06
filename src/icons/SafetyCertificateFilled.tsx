// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SafetyCertificateFilledSvg from '@ant-design/icons-svg/lib/asn/SafetyCertificateFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-safety-certificate-filled')
export default class SafetyCertificateFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'SafetyCertificateFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={SafetyCertificateFilledSvg}></AntdIcon>;
  };
}