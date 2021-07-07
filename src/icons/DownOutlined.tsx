// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DownOutlinedSvg from '@ant-design/icons-svg/lib/asn/DownOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-down-outlined')
export default class DownOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'DownOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={DownOutlinedSvg} />;
  };
}