// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import TrophyFilledSvg from '@ant-design/icons-svg/lib/asn/TrophyFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-trophy-filled')
export default class TrophyFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'TrophyFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={TrophyFilledSvg} />;
  };
}