// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import TagFilledSvg from '@ant-design/icons-svg/lib/asn/TagFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-tag-filled')
export default class TagFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'TagFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={TagFilledSvg} />;
  };
}