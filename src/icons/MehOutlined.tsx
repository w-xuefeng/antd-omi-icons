// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import MehOutlinedSvg from '@ant-design/icons-svg/lib/asn/MehOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-meh-outlined')
export default class MehOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'MehOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={MehOutlinedSvg}></AntdIcon>;
  };
}