// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import HeartFilledSvg from '@ant-design/icons-svg/es/asn/HeartFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-heart-filled')
export default class HeartFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'HeartFilled';
  static tagName = 'o-heart-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={HeartFilledSvg} />;
  };
}