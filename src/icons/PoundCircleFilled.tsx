// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import PoundCircleFilledSvg from '@ant-design/icons-svg/lib/asn/PoundCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-pound-circle-filled')
export default class PoundCircleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'PoundCircleFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={PoundCircleFilledSvg}></AntdIcon>;
  };
}