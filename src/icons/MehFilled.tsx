// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import MehFilledSvg from '@ant-design/icons-svg/es/asn/MehFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-meh-filled')
export default class MehFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'MehFilled';
  static tagName = 'o-meh-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={MehFilledSvg} />;
  };
}