// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ControlOutlinedSvg from '@ant-design/icons-svg/lib/asn/ControlOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-control-outlined')
export default class ControlOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ControlOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={ControlOutlinedSvg} />;
  };
}