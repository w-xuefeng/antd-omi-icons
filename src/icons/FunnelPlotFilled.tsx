// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import { rmIEFP } from 'omi-tools';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const FunnelPlotFilledSvg: AntdIconProps['icon'] = {"icon":{"tag":"svg","attrs":{"viewBox":"64 64 896 896","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M336.7 586h350.6l84.9-148H251.8zm543.4-432H143.9c-24.5 0-39.8 26.7-27.5 48L215 374h594l98.7-172c12.2-21.3-3.1-48-27.6-48zM349 838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V650H349v188z"}}]},"name":"funnel-plot","theme":"filled"};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['o-funnel-plot-filled']: Omi.Props & Partial<AntdIconProps>
    }
  }
}

@tag('o-funnel-plot-filled')
export default class FunnelPlotFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'FunnelPlotFilled';
  static tagName = 'o-funnel-plot-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...rmIEFP(props)} icon={FunnelPlotFilledSvg} />;
  };
}