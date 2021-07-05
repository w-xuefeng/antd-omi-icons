// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ChromeFilledSvg from '@ant-design/icons-svg/lib/asn/ChromeFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-chrome-filled')
export default class ChromeFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'ChromeFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={ChromeFilledSvg}></AntdIcon>;
  };
}