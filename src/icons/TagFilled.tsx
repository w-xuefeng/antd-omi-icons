// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import TagFilledSvg from '@ant-design/icons-svg/lib/asn/TagFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-tag-filled')
export default class TagFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'TagFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={TagFilledSvg}></AntdIcon>;
  };
}