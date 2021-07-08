// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import LikeTwoToneSvg from '@ant-design/icons-svg/es/asn/LikeTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-like-two-tone')
export default class LikeTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'LikeTwoTone';
  static tagName = 'o-like-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={LikeTwoToneSvg} />;
  };
}