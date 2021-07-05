// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DeleteFilledSvg from '@ant-design/icons-svg/lib/asn/DeleteFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-delete-filled')
export default class DeleteFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'DeleteFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={DeleteFilledSvg}></AntdIcon>;
  };
}