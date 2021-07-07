// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SwitcherTwoToneSvg from '@ant-design/icons-svg/lib/asn/SwitcherTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-switcher-two-tone')
export default class SwitcherTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'SwitcherTwoTone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={SwitcherTwoToneSvg} />;
  };
}