// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import NumberOutlinedSvg from '@ant-design/icons-svg/lib/asn/NumberOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-number-outlined')
export default class NumberOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'NumberOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={NumberOutlinedSvg} />;
  };
}