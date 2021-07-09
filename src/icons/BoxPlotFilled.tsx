// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const BoxPlotFilledSvg = {"icon":{"tag":"svg","attrs":{"viewBox":"64 64 896 896","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M952 224h-52c-4.4 0-8 3.6-8 8v248h-92V304c0-4.4-3.6-8-8-8H448v432h344c4.4 0 8-3.6 8-8V548h92v244c0 4.4 3.6 8 8 8h52c4.4 0 8-3.6 8-8V232c0-4.4-3.6-8-8-8zm-728 80v176h-92V232c0-4.4-3.6-8-8-8H72c-4.4 0-8 3.6-8 8v560c0 4.4 3.6 8 8 8h52c4.4 0 8-3.6 8-8V548h92v172c0 4.4 3.6 8 8 8h152V296H232c-4.4 0-8 3.6-8 8z"}}]},"name":"box-plot","theme":"filled"};

@tag('o-box-plot-filled')
export default class BoxPlotFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'BoxPlotFilled';
  static tagName = 'o-box-plot-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={BoxPlotFilledSvg} />;
  };
}