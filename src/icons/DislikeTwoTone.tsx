// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DislikeTwoToneSvg from '@ant-design/icons-svg/lib/asn/DislikeTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-dislike-two-tone')
export default class DislikeTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'DislikeTwoTone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={DislikeTwoToneSvg} />;
  };
}