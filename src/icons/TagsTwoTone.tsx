// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import TagsTwoToneSvg from '@ant-design/icons-svg/lib/asn/TagsTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-tags-two-tone')
export default class TagsTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'TagsTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={TagsTwoToneSvg}></AntdIcon>;
  };
}