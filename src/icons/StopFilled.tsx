// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import StopFilledSvg from '@ant-design/icons-svg/es/asn/StopFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-stop-filled')
export default class StopFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'StopFilled';
  static tagName = 'o-stop-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={StopFilledSvg} />;
  };
}