// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ThunderboltTwoToneSvg from '@ant-design/icons-svg/lib/asn/ThunderboltTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-thunderbolt-two-tone')
export default class ThunderboltTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'ThunderboltTwoTone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={ThunderboltTwoToneSvg} />;
  };
}