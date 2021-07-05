// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import StepForwardOutlinedSvg from '@ant-design/icons-svg/lib/asn/StepForwardOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-step-forward-outlined')
export default class StepForwardOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'StepForwardOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={StepForwardOutlinedSvg}></AntdIcon>;
  };
}