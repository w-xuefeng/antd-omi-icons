// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import BookTwoToneSvg from '@ant-design/icons-svg/lib/asn/BookTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-book-two-tone')
export default class BookTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'BookTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={BookTwoToneSvg}></AntdIcon>;
  };
}