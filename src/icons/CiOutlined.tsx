// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CiOutlinedSvg from '@ant-design/icons-svg/lib/asn/CiOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-ci-outlined')
export default class CiOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'CiOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={CiOutlinedSvg}></AntdIcon>;
  };
}