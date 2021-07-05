// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import EditOutlinedSvg from '@ant-design/icons-svg/lib/asn/EditOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-edit-outlined')
export default class EditOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'EditOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={EditOutlinedSvg}></AntdIcon>;
  };
}