// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import BookOutlinedSvg from '@ant-design/icons-svg/es/asn/BookOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-book-outlined')
export default class BookOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'BookOutlined';
  static tagName = 'o-book-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={BookOutlinedSvg} />;
  };
}