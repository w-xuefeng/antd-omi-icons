// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import HddFilledSvg from '@ant-design/icons-svg/es/asn/HddFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-hdd-filled')
export default class HddFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'HddFilled';
  static tagName = 'o-hdd-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={HddFilledSvg} />;
  };
}