// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DeleteColumnOutlinedSvg from '@ant-design/icons-svg/lib/asn/DeleteColumnOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-delete-column-outlined')
export default class DeleteColumnOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'DeleteColumnOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={DeleteColumnOutlinedSvg}></AntdIcon>;
  };
}