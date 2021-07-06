// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ProjectFilledSvg from '@ant-design/icons-svg/lib/asn/ProjectFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-project-filled')
export default class ProjectFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'ProjectFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={ProjectFilledSvg}></AntdIcon>;
  };
}