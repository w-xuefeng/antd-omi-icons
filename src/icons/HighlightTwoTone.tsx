// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import HighlightTwoToneSvg from '@ant-design/icons-svg/lib/asn/HighlightTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-highlight-two-tone')
export default class HighlightTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'HighlightTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={HighlightTwoToneSvg}></AntdIcon>;
  };
}