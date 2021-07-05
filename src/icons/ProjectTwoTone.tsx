// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ProjectTwoToneSvg from '@ant-design/icons-svg/lib/asn/ProjectTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-project-two-tone')
export default class ProjectTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'ProjectTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={ProjectTwoToneSvg}></AntdIcon>;
  };
}