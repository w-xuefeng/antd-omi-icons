// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import BellTwoToneSvg from '@ant-design/icons-svg/es/asn/BellTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-bell-two-tone')
export default class BellTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'BellTwoTone';
  static tagName = 'o-bell-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={BellTwoToneSvg} />;
  };
}