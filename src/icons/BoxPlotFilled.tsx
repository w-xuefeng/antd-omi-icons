// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import BoxPlotFilledSvg from '@ant-design/icons-svg/lib/asn/BoxPlotFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-box-plot-filled')
export default class BoxPlotFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'BoxPlotFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={BoxPlotFilledSvg} />;
  };
}