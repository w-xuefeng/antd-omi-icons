// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CiCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/CiCircleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-ci-circle-two-tone')
export default class CiCircleTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'CiCircleTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={CiCircleTwoToneSvg}></AntdIcon>;
  };
}