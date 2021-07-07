// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import MacCommandOutlinedSvg from '@ant-design/icons-svg/lib/asn/MacCommandOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-mac-command-outlined')
export default class MacCommandOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'MacCommandOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={MacCommandOutlinedSvg} />;
  };
}