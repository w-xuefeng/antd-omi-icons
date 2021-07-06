// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import PayCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/PayCircleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-pay-circle-outlined')
export default class PayCircleOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'PayCircleOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={PayCircleOutlinedSvg}></AntdIcon>;
  };
}