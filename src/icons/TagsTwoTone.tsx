// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import TagsTwoToneSvg from '@ant-design/icons-svg/lib/asn/TagsTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-tags-two-tone')
export default class TagsTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'TagsTwoTone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={TagsTwoToneSvg} />;
  };
}