// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import TagTwoToneSvg from '@ant-design/icons-svg/lib/asn/TagTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-tag-two-tone')
export default class TagTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'TagTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={TagTwoToneSvg}></AntdIcon>;
  };
}