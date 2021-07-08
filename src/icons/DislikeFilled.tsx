// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DislikeFilledSvg from '@ant-design/icons-svg/es/asn/DislikeFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-dislike-filled')
export default class DislikeFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'DislikeFilled';
  static tagName = 'o-dislike-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={DislikeFilledSvg} />;
  };
}