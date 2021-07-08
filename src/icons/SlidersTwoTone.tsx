// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SlidersTwoToneSvg from '@ant-design/icons-svg/es/asn/SlidersTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-sliders-two-tone')
export default class SlidersTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'SlidersTwoTone';
  static tagName = 'o-sliders-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={SlidersTwoToneSvg} />;
  };
}