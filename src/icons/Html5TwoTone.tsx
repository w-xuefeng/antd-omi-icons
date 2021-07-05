// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import Html5TwoToneSvg from '@ant-design/icons-svg/lib/asn/Html5TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-html5-two-tone')
export default class Html5TwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'Html5TwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={Html5TwoToneSvg}></AntdIcon>;
  };
}