// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import BookFilledSvg from '@ant-design/icons-svg/es/asn/BookFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-book-filled')
export default class BookFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'BookFilled';
  static tagName = 'o-book-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={BookFilledSvg} />;
  };
}