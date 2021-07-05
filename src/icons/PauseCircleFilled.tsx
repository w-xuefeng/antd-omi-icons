// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import PauseCircleFilledSvg from '@ant-design/icons-svg/lib/asn/PauseCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-pause-circle-filled')
export default class PauseCircleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'PauseCircleFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={PauseCircleFilledSvg}></AntdIcon>;
  };
}