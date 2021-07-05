// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DiffOutlinedSvg from '@ant-design/icons-svg/lib/asn/DiffOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-diff-outlined')
export default class DiffOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'DiffOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={DiffOutlinedSvg}></AntdIcon>;
  };
}