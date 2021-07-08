// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CoffeeOutlinedSvg from '@ant-design/icons-svg/es/asn/CoffeeOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-coffee-outlined')
export default class CoffeeOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'CoffeeOutlined';
  static tagName = 'o-coffee-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CoffeeOutlinedSvg} />;
  };
}