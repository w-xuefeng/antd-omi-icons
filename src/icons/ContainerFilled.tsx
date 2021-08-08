// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import { rmIEFP } from 'omi-tools';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const ContainerFilledSvg: AntdIconProps['icon'] = {"icon":{"tag":"svg","attrs":{"viewBox":"64 64 896 896","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M832 64H192c-17.7 0-32 14.3-32 32v529c0-.6.4-1 1-1h219.3l5.2 24.7C397.6 708.5 450.8 752 512 752s114.4-43.5 126.4-103.3l5.2-24.7H863c.6 0 1 .4 1 1V96c0-17.7-14.3-32-32-32zM712 493c0 4.4-3.6 8-8 8H320c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h384c4.4 0 8 3.6 8 8v48zm0-160c0 4.4-3.6 8-8 8H320c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h384c4.4 0 8 3.6 8 8v48zm151 354H694.1c-11.6 32.8-32 62.3-59.1 84.7-34.5 28.6-78.2 44.3-123 44.3s-88.5-15.8-123-44.3a194.02 194.02 0 01-59.1-84.7H161c-.6 0-1-.4-1-1v242c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V686c0 .6-.4 1-1 1z"}}]},"name":"container","theme":"filled"};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['o-container-filled']: Omi.Props & Partial<AntdIconProps>
    }
  }
}

@tag('o-container-filled')
export default class ContainerFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'ContainerFilled';
  static tagName = 'o-container-filled';
  static inheritAttrs = false;
  render(props: Omi.OmiProps<AntdIconProps>) {
    return <o-antd-icon {...rmIEFP(props)} icon={ContainerFilledSvg} />;
  };
}