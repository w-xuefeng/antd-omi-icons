// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DislikeOutlinedSvg from '@ant-design/icons-svg/es/asn/DislikeOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-dislike-outlined')
export default class DislikeOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'DislikeOutlined';
  static tagName = 'o-dislike-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={DislikeOutlinedSvg} />;
  };
}