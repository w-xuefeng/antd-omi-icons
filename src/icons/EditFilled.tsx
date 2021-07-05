// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import EditFilledSvg from '@ant-design/icons-svg/lib/asn/EditFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-edit-filled')
export default class EditFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'EditFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={EditFilledSvg}></AntdIcon>;
  };
}