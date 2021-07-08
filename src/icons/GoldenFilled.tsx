// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import GoldenFilledSvg from '@ant-design/icons-svg/es/asn/GoldenFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-golden-filled')
export default class GoldenFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'GoldenFilled';
  static tagName = 'o-golden-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={GoldenFilledSvg} />;
  };
}