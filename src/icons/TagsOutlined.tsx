// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import TagsOutlinedSvg from '@ant-design/icons-svg/es/asn/TagsOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-tags-outlined')
export default class TagsOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'TagsOutlined';
  static tagName = 'o-tags-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={TagsOutlinedSvg} />;
  };
}