// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import TagOutlinedSvg from '@ant-design/icons-svg/lib/asn/TagOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-tag-outlined')
export default class TagOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'TagOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={TagOutlinedSvg} />;
  };
}