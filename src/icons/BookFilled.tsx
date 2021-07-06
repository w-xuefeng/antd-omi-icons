// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import BookFilledSvg from '@ant-design/icons-svg/lib/asn/BookFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-book-filled')
export default class BookFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'BookFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={BookFilledSvg}></AntdIcon>;
  };
}