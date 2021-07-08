// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import TrophyOutlinedSvg from '@ant-design/icons-svg/es/asn/TrophyOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-trophy-outlined')
export default class TrophyOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'TrophyOutlined';
  static tagName = 'o-trophy-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={TrophyOutlinedSvg} />;
  };
}