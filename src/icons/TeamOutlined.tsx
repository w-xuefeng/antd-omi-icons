// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import TeamOutlinedSvg from '@ant-design/icons-svg/lib/asn/TeamOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-team-outlined')
export default class TeamOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'TeamOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={TeamOutlinedSvg} />;
  };
}