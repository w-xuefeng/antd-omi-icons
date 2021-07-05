// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SafetyCertificateOutlinedSvg from '@ant-design/icons-svg/lib/asn/SafetyCertificateOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-safety-certificate-outlined')
export default class SafetyCertificateOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'SafetyCertificateOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={SafetyCertificateOutlinedSvg}></AntdIcon>;
  };
}