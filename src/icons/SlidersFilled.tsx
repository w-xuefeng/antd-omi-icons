// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SlidersFilledSvg from '@ant-design/icons-svg/lib/asn/SlidersFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-sliders-filled')
export default class SlidersFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'SlidersFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={SlidersFilledSvg}></AntdIcon>;
  };
}