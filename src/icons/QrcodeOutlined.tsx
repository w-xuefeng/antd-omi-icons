// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import QrcodeOutlinedSvg from '@ant-design/icons-svg/lib/asn/QrcodeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-qrcode-outlined')
export default class QrcodeOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'QrcodeOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={QrcodeOutlinedSvg}></AntdIcon>;
  };
}