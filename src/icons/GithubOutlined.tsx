// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import GithubOutlinedSvg from '@ant-design/icons-svg/lib/asn/GithubOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-github-outlined')
export default class GithubOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'GithubOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={GithubOutlinedSvg}></AntdIcon>;
  };
}