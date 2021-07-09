// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const ForwardFilledSvg: AntdIconProps['icon'] = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 1024 1024","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M825.8 498L538.4 249.9c-10.7-9.2-26.4-.9-26.4 14v496.3c0 14.9 15.7 23.2 26.4 14L825.8 526c8.3-7.2 8.3-20.8 0-28zm-320 0L218.4 249.9c-10.7-9.2-26.4-.9-26.4 14v496.3c0 14.9 15.7 23.2 26.4 14L505.8 526c4.1-3.6 6.2-8.8 6.2-14 0-5.2-2.1-10.4-6.2-14z"}}]},"name":"forward","theme":"filled"};

@tag('o-forward-filled')
export default class ForwardFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'ForwardFilled';
  static tagName = 'o-forward-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={ForwardFilledSvg} />;
  };
}