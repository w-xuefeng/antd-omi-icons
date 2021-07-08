// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import BookTwoToneSvg from '@ant-design/icons-svg/es/asn/BookTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-book-two-tone')
export default class BookTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'BookTwoTone';
  static tagName = 'o-book-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={BookTwoToneSvg} />;
  };
}