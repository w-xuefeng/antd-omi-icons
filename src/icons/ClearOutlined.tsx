// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ClearOutlinedSvg from '@ant-design/icons-svg/lib/asn/ClearOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-clear-outlined')
export default class ClearOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ClearOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={ClearOutlinedSvg} />;
  };
}