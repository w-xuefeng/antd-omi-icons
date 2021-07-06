// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import BoxPlotTwoToneSvg from '@ant-design/icons-svg/lib/asn/BoxPlotTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-box-plot-two-tone')
export default class BoxPlotTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'BoxPlotTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={BoxPlotTwoToneSvg}></AntdIcon>;
  };
}