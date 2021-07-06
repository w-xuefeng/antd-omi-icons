// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import TagOutlinedSvg from '@ant-design/icons-svg/lib/asn/TagOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-tag-outlined')
export default class TagOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'TagOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={TagOutlinedSvg}></AntdIcon>;
  };
}