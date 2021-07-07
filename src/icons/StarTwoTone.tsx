// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import StarTwoToneSvg from '@ant-design/icons-svg/lib/asn/StarTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-star-two-tone')
export default class StarTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'StarTwoTone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={StarTwoToneSvg} />;
  };
}