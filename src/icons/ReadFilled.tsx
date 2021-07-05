// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ReadFilledSvg from '@ant-design/icons-svg/lib/asn/ReadFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-read-filled')
export default class ReadFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'ReadFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={ReadFilledSvg}></AntdIcon>;
  };
}