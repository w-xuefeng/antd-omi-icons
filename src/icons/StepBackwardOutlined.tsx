// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import StepBackwardOutlinedSvg from '@ant-design/icons-svg/lib/asn/StepBackwardOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-step-backward-outlined')
export default class StepBackwardOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'StepBackwardOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={StepBackwardOutlinedSvg} />;
  };
}