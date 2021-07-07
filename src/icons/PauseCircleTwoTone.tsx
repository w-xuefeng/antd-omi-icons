// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import PauseCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/PauseCircleTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-pause-circle-two-tone')
export default class PauseCircleTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'PauseCircleTwoTone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={PauseCircleTwoToneSvg} />;
  };
}