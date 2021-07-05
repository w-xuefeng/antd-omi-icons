// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import BugOutlinedSvg from '@ant-design/icons-svg/lib/asn/BugOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-bug-outlined')
export default class BugOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'BugOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={BugOutlinedSvg}></AntdIcon>;
  };
}