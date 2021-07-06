// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import GitlabFilledSvg from '@ant-design/icons-svg/lib/asn/GitlabFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-gitlab-filled')
export default class GitlabFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'GitlabFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={GitlabFilledSvg}></AntdIcon>;
  };
}