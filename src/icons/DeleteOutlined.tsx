// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DeleteOutlinedSvg from '@ant-design/icons-svg/lib/asn/DeleteOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-delete-outlined')
export default class DeleteOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'DeleteOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={DeleteOutlinedSvg}></AntdIcon>;
  };
}