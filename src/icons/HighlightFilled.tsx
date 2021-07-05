// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import HighlightFilledSvg from '@ant-design/icons-svg/lib/asn/HighlightFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-highlight-filled')
export default class HighlightFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'HighlightFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={HighlightFilledSvg}></AntdIcon>;
  };
}