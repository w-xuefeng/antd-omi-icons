// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CommentOutlinedSvg from '@ant-design/icons-svg/es/asn/CommentOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-comment-outlined')
export default class CommentOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'CommentOutlined';
  static tagName = 'o-comment-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CommentOutlinedSvg} />;
  };
}