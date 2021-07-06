// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CaretUpOutlinedSvg from '@ant-design/icons-svg/lib/asn/CaretUpOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-caret-up-outlined')
export default class CaretUpOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'CaretUpOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={CaretUpOutlinedSvg}></AntdIcon>;
  };
}