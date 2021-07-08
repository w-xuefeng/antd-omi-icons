// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import PushpinOutlinedSvg from '@ant-design/icons-svg/es/asn/PushpinOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-pushpin-outlined')
export default class PushpinOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'PushpinOutlined';
  static tagName = 'o-pushpin-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={PushpinOutlinedSvg} />;
  };
}