// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import StepForwardFilledSvg from '@ant-design/icons-svg/lib/asn/StepForwardFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-step-forward-filled')
export default class StepForwardFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'StepForwardFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={StepForwardFilledSvg} />;
  };
}