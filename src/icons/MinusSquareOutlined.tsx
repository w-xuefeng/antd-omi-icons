// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import MinusSquareOutlinedSvg from '@ant-design/icons-svg/lib/asn/MinusSquareOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-minus-square-outlined')
export default class MinusSquareOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'MinusSquareOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={MinusSquareOutlinedSvg} />;
  };
}