// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SafetyCertificateTwoToneSvg from '@ant-design/icons-svg/lib/asn/SafetyCertificateTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-safety-certificate-two-tone')
export default class SafetyCertificateTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'SafetyCertificateTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={SafetyCertificateTwoToneSvg}></AntdIcon>;
  };
}