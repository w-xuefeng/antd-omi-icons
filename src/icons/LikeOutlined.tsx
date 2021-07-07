// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import LikeOutlinedSvg from '@ant-design/icons-svg/lib/asn/LikeOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-like-outlined')
export default class LikeOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'LikeOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={LikeOutlinedSvg} />;
  };
}