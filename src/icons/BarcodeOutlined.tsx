// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import BarcodeOutlinedSvg from '@ant-design/icons-svg/lib/asn/BarcodeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-barcode-outlined')
export default class BarcodeOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'BarcodeOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={BarcodeOutlinedSvg}></AntdIcon>;
  };
}