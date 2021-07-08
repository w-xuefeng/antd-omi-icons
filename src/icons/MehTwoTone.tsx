// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import MehTwoToneSvg from '@ant-design/icons-svg/es/asn/MehTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-meh-two-tone')
export default class MehTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'MehTwoTone';
  static tagName = 'o-meh-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={MehTwoToneSvg} />;
  };
}