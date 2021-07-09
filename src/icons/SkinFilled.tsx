// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const SkinFilledSvg: AntdIconProps['icon'] = {"icon":{"tag":"svg","attrs":{"viewBox":"64 64 896 896","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M870 126H663.8c-17.4 0-32.9 11.9-37 29.3C614.3 208.1 567 246 512 246s-102.3-37.9-114.8-90.7a37.93 37.93 0 00-37-29.3H154a44 44 0 00-44 44v252a44 44 0 0044 44h75v388a44 44 0 0044 44h478a44 44 0 0044-44V466h75a44 44 0 0044-44V170a44 44 0 00-44-44z"}}]},"name":"skin","theme":"filled"};

@tag('o-skin-filled')
export default class SkinFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'SkinFilled';
  static tagName = 'o-skin-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={SkinFilledSvg} />;
  };
}