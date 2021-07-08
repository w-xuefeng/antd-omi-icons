// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import QrcodeOutlinedSvg from '@ant-design/icons-svg/es/asn/QrcodeOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-qrcode-outlined')
export default class QrcodeOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'QrcodeOutlined';
  static tagName = 'o-qrcode-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={QrcodeOutlinedSvg} />;
  };
}