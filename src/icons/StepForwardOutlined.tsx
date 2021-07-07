// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import StepForwardOutlinedSvg from '@ant-design/icons-svg/lib/asn/StepForwardOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-step-forward-outlined')
export default class StepForwardOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'StepForwardOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={StepForwardOutlinedSvg} />;
  };
}