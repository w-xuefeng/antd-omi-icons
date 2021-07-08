// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ForwardFilledSvg from '@ant-design/icons-svg/es/asn/ForwardFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-forward-filled')
export default class ForwardFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'ForwardFilled';
  static tagName = 'o-forward-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={ForwardFilledSvg} />;
  };
}