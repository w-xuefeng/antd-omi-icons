// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import RightCircleFilledSvg from '@ant-design/icons-svg/lib/asn/RightCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-right-circle-filled')
export default class RightCircleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'RightCircleFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={RightCircleFilledSvg}></AntdIcon>;
  };
}