// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import MinusOutlinedSvg from '@ant-design/icons-svg/lib/asn/MinusOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-minus-outlined')
export default class MinusOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'MinusOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={MinusOutlinedSvg}></AntdIcon>;
  };
}