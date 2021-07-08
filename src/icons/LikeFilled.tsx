// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import LikeFilledSvg from '@ant-design/icons-svg/es/asn/LikeFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-like-filled')
export default class LikeFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'LikeFilled';
  static tagName = 'o-like-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={LikeFilledSvg} />;
  };
}