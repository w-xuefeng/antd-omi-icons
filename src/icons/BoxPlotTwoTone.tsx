// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const BoxPlotTwoToneSvg = {"name":"box-plot","theme":"twotone"};

@tag('o-box-plot-two-tone')
export default class BoxPlotTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'BoxPlotTwoTone';
  static tagName = 'o-box-plot-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={BoxPlotTwoToneSvg} />;
  };
}