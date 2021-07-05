// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import TagsFilledSvg from '@ant-design/icons-svg/lib/asn/TagsFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-tags-filled')
export default class TagsFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'TagsFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={TagsFilledSvg}></AntdIcon>;
  };
}