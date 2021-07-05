// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CopyFilledSvg from '@ant-design/icons-svg/lib/asn/CopyFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-copy-filled')
export default class CopyFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'CopyFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={CopyFilledSvg}></AntdIcon>;
  };
}