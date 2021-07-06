// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import TrophyOutlinedSvg from '@ant-design/icons-svg/lib/asn/TrophyOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-trophy-outlined')
export default class TrophyOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'TrophyOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={TrophyOutlinedSvg}></AntdIcon>;
  };
}