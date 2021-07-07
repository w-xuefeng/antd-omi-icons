// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import GitlabFilledSvg from '@ant-design/icons-svg/lib/asn/GitlabFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-gitlab-filled')
export default class GitlabFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'GitlabFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={GitlabFilledSvg} />;
  };
}