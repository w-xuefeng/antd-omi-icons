// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import BackwardOutlinedSvg from '@ant-design/icons-svg/lib/asn/BackwardOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-backward-outlined')
export default class BackwardOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'BackwardOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={BackwardOutlinedSvg} />;
  };
}