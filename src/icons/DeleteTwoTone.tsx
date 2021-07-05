// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DeleteTwoToneSvg from '@ant-design/icons-svg/lib/asn/DeleteTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-delete-two-tone')
export default class DeleteTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'DeleteTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={DeleteTwoToneSvg}></AntdIcon>;
  };
}