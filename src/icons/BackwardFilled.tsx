// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import BackwardFilledSvg from '@ant-design/icons-svg/lib/asn/BackwardFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-backward-filled')
export default class BackwardFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'BackwardFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={BackwardFilledSvg} />;
  };
}