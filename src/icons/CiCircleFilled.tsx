// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CiCircleFilledSvg from '@ant-design/icons-svg/lib/asn/CiCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-ci-circle-filled')
export default class CiCircleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'CiCircleFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={CiCircleFilledSvg}></AntdIcon>;
  };
}