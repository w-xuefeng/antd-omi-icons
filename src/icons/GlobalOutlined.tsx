// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import GlobalOutlinedSvg from '@ant-design/icons-svg/lib/asn/GlobalOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-global-outlined')
export default class GlobalOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'GlobalOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={GlobalOutlinedSvg} />;
  };
}