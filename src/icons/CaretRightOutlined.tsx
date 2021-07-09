// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const CaretRightOutlinedSvg = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 1024 1024","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z"}}]},"name":"caret-right","theme":"outlined"};

@tag('o-caret-right-outlined')
export default class CaretRightOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'CaretRightOutlined';
  static tagName = 'o-caret-right-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CaretRightOutlinedSvg} />;
  };
}