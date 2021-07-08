// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import PauseCircleFilledSvg from '@ant-design/icons-svg/es/asn/PauseCircleFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-pause-circle-filled')
export default class PauseCircleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'PauseCircleFilled';
  static tagName = 'o-pause-circle-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={PauseCircleFilledSvg} />;
  };
}