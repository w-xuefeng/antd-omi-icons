// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SlidersFilledSvg from '@ant-design/icons-svg/es/asn/SlidersFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-sliders-filled')
export default class SlidersFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'SlidersFilled';
  static tagName = 'o-sliders-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={SlidersFilledSvg} />;
  };
}