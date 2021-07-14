// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import { rmIEFP } from 'omi-tools';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const InfoOutlinedSvg: AntdIconProps['icon'] = {"icon":{"tag":"svg","attrs":{"viewBox":"64 64 896 896","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M448 224a64 64 0 10128 0 64 64 0 10-128 0zm96 168h-64c-4.4 0-8 3.6-8 8v464c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V400c0-4.4-3.6-8-8-8z"}}]},"name":"info","theme":"outlined"};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['o-info-outlined']: Omi.Props & Partial<AntdIconProps>
    }
  }
}

@tag('o-info-outlined')
export default class InfoOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'InfoOutlined';
  static tagName = 'o-info-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...rmIEFP(props)} icon={InfoOutlinedSvg} />;
  };
}