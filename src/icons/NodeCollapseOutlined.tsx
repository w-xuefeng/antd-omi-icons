// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import { rmIEFP } from 'omi-tools';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const NodeCollapseOutlinedSvg: AntdIconProps['icon'] = {"icon":{"tag":"svg","attrs":{"viewBox":"64 64 896 896","focusable":"false"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M952 612c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H298a95.92 95.92 0 00-89-60c-53 0-96 43-96 96s43 96 96 96c40.3 0 74.8-24.8 89-60h150.3v152c0 55.2 44.8 100 100 100H952c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H548.3c-15.5 0-28-12.5-28-28V612H952zM451.7 313.7l172.5 136.2c6.3 5.1 15.8.5 15.8-7.7V344h264c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8H640v-98.2c0-8.1-9.4-12.8-15.8-7.7L451.7 298.3a9.9 9.9 0 000 15.4z"}}]},"name":"node-collapse","theme":"outlined"};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['o-node-collapse-outlined']: Omi.Props & Partial<AntdIconProps>
    }
  }
}

@tag('o-node-collapse-outlined')
export default class NodeCollapseOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'NodeCollapseOutlined';
  static tagName = 'o-node-collapse-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...rmIEFP(props)} icon={NodeCollapseOutlinedSvg} />;
  };
}