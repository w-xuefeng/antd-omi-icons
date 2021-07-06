// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SlidersTwoToneSvg from '@ant-design/icons-svg/lib/asn/SlidersTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-sliders-two-tone')
export default class SlidersTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'SlidersTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={SlidersTwoToneSvg}></AntdIcon>;
  };
}