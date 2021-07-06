// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import MinusSquareOutlinedSvg from '@ant-design/icons-svg/lib/asn/MinusSquareOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-minus-square-outlined')
export default class MinusSquareOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'MinusSquareOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={MinusSquareOutlinedSvg}></AntdIcon>;
  };
}