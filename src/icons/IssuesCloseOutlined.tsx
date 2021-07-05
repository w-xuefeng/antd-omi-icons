// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import IssuesCloseOutlinedSvg from '@ant-design/icons-svg/lib/asn/IssuesCloseOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-issues-close-outlined')
export default class IssuesCloseOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'IssuesCloseOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={IssuesCloseOutlinedSvg}></AntdIcon>;
  };
}