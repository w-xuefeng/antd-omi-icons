// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ExpandAltOutlinedSvg from '@ant-design/icons-svg/lib/asn/ExpandAltOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-expand-alt-outlined')
export default class ExpandAltOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ExpandAltOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={ExpandAltOutlinedSvg} />;
  };
}