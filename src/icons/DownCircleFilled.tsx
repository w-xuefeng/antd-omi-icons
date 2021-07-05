// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DownCircleFilledSvg from '@ant-design/icons-svg/lib/asn/DownCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-down-circle-filled')
export default class DownCircleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'DownCircleFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={DownCircleFilledSvg}></AntdIcon>;
  };
}