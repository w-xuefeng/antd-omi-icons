// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import GroupOutlinedSvg from '@ant-design/icons-svg/es/asn/GroupOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-group-outlined')
export default class GroupOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'GroupOutlined';
  static tagName = 'o-group-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={GroupOutlinedSvg} />;
  };
}