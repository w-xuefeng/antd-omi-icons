// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import BellFilledSvg from '@ant-design/icons-svg/lib/asn/BellFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-bell-filled')
export default class BellFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'BellFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={BellFilledSvg} />;
  };
}