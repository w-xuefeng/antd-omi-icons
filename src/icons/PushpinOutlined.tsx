// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import PushpinOutlinedSvg from '@ant-design/icons-svg/lib/asn/PushpinOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-pushpin-outlined')
export default class PushpinOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'PushpinOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={PushpinOutlinedSvg} />;
  };
}