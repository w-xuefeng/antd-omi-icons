// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import TagsFilledSvg from '@ant-design/icons-svg/es/asn/TagsFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-tags-filled')
export default class TagsFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'TagsFilled';
  static tagName = 'o-tags-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={TagsFilledSvg} />;
  };
}