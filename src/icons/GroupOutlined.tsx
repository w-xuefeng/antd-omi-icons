// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import GroupOutlinedSvg from '@ant-design/icons-svg/lib/asn/GroupOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-group-outlined')
export default class GroupOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'GroupOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={GroupOutlinedSvg}></AntdIcon>;
  };
}