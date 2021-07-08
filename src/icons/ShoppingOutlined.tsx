// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ShoppingOutlinedSvg from '@ant-design/icons-svg/es/asn/ShoppingOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-shopping-outlined')
export default class ShoppingOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ShoppingOutlined';
  static tagName = 'o-shopping-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={ShoppingOutlinedSvg} />;
  };
}