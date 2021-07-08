// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ThunderboltFilledSvg from '@ant-design/icons-svg/es/asn/ThunderboltFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-thunderbolt-filled')
export default class ThunderboltFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'ThunderboltFilled';
  static tagName = 'o-thunderbolt-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={ThunderboltFilledSvg} />;
  };
}