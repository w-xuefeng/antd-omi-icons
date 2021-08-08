// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import { rmIEFP } from 'omi-tools';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const RollbackOutlinedSvg: AntdIconProps['icon'] = {"icon":{"tag":"svg","attrs":{"viewBox":"64 64 896 896","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M793 242H366v-74c0-6.7-7.7-10.4-12.9-6.3l-142 112a8 8 0 000 12.6l142 112c5.2 4.1 12.9.4 12.9-6.3v-74h415v470H175c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h618c35.3 0 64-28.7 64-64V306c0-35.3-28.7-64-64-64z"}}]},"name":"rollback","theme":"outlined"};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['o-rollback-outlined']: Omi.Props & Partial<AntdIconProps>
    }
  }
}

@tag('o-rollback-outlined')
export default class RollbackOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'RollbackOutlined';
  static tagName = 'o-rollback-outlined';
  static inheritAttrs = false;
  render(props: Omi.OmiProps<AntdIconProps>) {
    return <o-antd-icon {...rmIEFP(props)} icon={RollbackOutlinedSvg} />;
  };
}