// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FunctionOutlinedSvg from '@ant-design/icons-svg/lib/asn/FunctionOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-function-outlined')
export default class FunctionOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'FunctionOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={FunctionOutlinedSvg}></AntdIcon>;
  };
}