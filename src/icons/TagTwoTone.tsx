// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import TagTwoToneSvg from '@ant-design/icons-svg/lib/asn/TagTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-tag-two-tone')
export default class TagTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'TagTwoTone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={TagTwoToneSvg} />;
  };
}