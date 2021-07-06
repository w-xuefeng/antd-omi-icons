// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import StepBackwardOutlinedSvg from '@ant-design/icons-svg/lib/asn/StepBackwardOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-step-backward-outlined')
export default class StepBackwardOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'StepBackwardOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={StepBackwardOutlinedSvg}></AntdIcon>;
  };
}