// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const RadarChartOutlinedSvg: AntdIconProps['icon'] = {"icon":{"tag":"svg","attrs":{"viewBox":"64 64 896 896","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M926.8 397.1l-396-288a31.81 31.81 0 00-37.6 0l-396 288a31.99 31.99 0 00-11.6 35.8l151.3 466a32 32 0 0030.4 22.1h489.5c13.9 0 26.1-8.9 30.4-22.1l151.3-466c4.2-13.2-.5-27.6-11.7-35.8zM838.6 417l-98.5 32-200-144.7V199.9L838.6 417zM466 567.2l-89.1 122.3-55.2-169.2L466 567.2zm-116.3-96.8L484 373.3v140.8l-134.3-43.7zM512 599.2l93.9 128.9H418.1L512 599.2zm28.1-225.9l134.2 97.1L540.1 514V373.3zM558 567.2l144.3-46.9-55.2 169.2L558 567.2zm-74-367.3v104.4L283.9 449l-98.5-32L484 199.9zM169.3 470.8l86.5 28.1 80.4 246.4-53.8 73.9-113.1-348.4zM327.1 853l50.3-69h269.3l50.3 69H327.1zm414.5-33.8l-53.8-73.9 80.4-246.4 86.5-28.1-113.1 348.4z"}}]},"name":"radar-chart","theme":"outlined"};

@tag('o-radar-chart-outlined')
export default class RadarChartOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'RadarChartOutlined';
  static tagName = 'o-radar-chart-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={RadarChartOutlinedSvg} />;
  };
}