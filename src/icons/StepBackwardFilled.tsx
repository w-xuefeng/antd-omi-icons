// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import StepBackwardFilledSvg from '@ant-design/icons-svg/lib/asn/StepBackwardFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-step-backward-filled')
export default class StepBackwardFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'StepBackwardFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={StepBackwardFilledSvg} />;
  };
}