// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import NumberOutlinedSvg from '@ant-design/icons-svg/lib/asn/NumberOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-number-outlined')
export default class NumberOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'NumberOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={NumberOutlinedSvg}></AntdIcon>;
  };
}