// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DiffFilledSvg from '@ant-design/icons-svg/lib/asn/DiffFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-diff-filled')
export default class DiffFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'DiffFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={DiffFilledSvg}></AntdIcon>;
  };
}