// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FireFilledSvg from '@ant-design/icons-svg/lib/asn/FireFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-fire-filled')
export default class FireFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'FireFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FireFilledSvg} />;
  };
}