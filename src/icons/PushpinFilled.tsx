// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import PushpinFilledSvg from '@ant-design/icons-svg/es/asn/PushpinFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-pushpin-filled')
export default class PushpinFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'PushpinFilled';
  static tagName = 'o-pushpin-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={PushpinFilledSvg} />;
  };
}