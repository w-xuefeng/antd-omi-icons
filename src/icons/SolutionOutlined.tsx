// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SolutionOutlinedSvg from '@ant-design/icons-svg/lib/asn/SolutionOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-solution-outlined')
export default class SolutionOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'SolutionOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={SolutionOutlinedSvg}></AntdIcon>;
  };
}