// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FastBackwardFilledSvg from '@ant-design/icons-svg/es/asn/FastBackwardFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-fast-backward-filled')
export default class FastBackwardFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'FastBackwardFilled';
  static tagName = 'o-fast-backward-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FastBackwardFilledSvg} />;
  };
}