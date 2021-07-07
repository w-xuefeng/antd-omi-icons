// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SwitcherFilledSvg from '@ant-design/icons-svg/lib/asn/SwitcherFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-switcher-filled')
export default class SwitcherFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'SwitcherFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={SwitcherFilledSvg} />;
  };
}