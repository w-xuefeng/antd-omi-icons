// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import UsergroupAddOutlinedSvg from '@ant-design/icons-svg/lib/asn/UsergroupAddOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-usergroup-add-outlined')
export default class UsergroupAddOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'UsergroupAddOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={UsergroupAddOutlinedSvg}></AntdIcon>;
  };
}