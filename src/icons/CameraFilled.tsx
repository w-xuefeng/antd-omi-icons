// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import { rmIEFP } from 'omi-tools';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const CameraFilledSvg: AntdIconProps['icon'] = {"icon":{"tag":"svg","attrs":{"viewBox":"64 64 896 896","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M864 260H728l-32.4-90.8a32.07 32.07 0 00-30.2-21.2H358.6c-13.5 0-25.6 8.5-30.1 21.2L296 260H160c-44.2 0-80 35.8-80 80v456c0 44.2 35.8 80 80 80h704c44.2 0 80-35.8 80-80V340c0-44.2-35.8-80-80-80zM512 716c-88.4 0-160-71.6-160-160s71.6-160 160-160 160 71.6 160 160-71.6 160-160 160zm-96-160a96 96 0 10192 0 96 96 0 10-192 0z"}}]},"name":"camera","theme":"filled"};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['o-camera-filled']: Omi.Props & Partial<AntdIconProps>
    }
  }
}

@tag('o-camera-filled')
export default class CameraFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'CameraFilled';
  static tagName = 'o-camera-filled';
  static inheritAttrs = false;
  render(props: Omi.OmiProps<AntdIconProps>) {
    return <o-antd-icon {...rmIEFP(props)} icon={CameraFilledSvg} />;
  };
}