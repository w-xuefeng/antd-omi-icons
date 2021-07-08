// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ProjectFilledSvg from '@ant-design/icons-svg/es/asn/ProjectFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-project-filled')
export default class ProjectFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'ProjectFilled';
  static tagName = 'o-project-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={ProjectFilledSvg} />;
  };
}