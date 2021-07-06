// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import TagsOutlinedSvg from '@ant-design/icons-svg/lib/asn/TagsOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-tags-outlined')
export default class TagsOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'TagsOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={TagsOutlinedSvg}></AntdIcon>;
  };
}