// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ProjectOutlinedSvg from '@ant-design/icons-svg/lib/asn/ProjectOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-project-outlined')
export default class ProjectOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ProjectOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={ProjectOutlinedSvg}></AntdIcon>;
  };
}