// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import TabletOutlinedSvg from '@ant-design/icons-svg/lib/asn/TabletOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-tablet-outlined')
export default class TabletOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'TabletOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={TabletOutlinedSvg} />;
  };
}