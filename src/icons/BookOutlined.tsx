// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import BookOutlinedSvg from '@ant-design/icons-svg/lib/asn/BookOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-book-outlined')
export default class BookOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'BookOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={BookOutlinedSvg}></AntdIcon>;
  };
}