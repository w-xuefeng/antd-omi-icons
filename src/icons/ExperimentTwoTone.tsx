// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ExperimentTwoToneSvg from '@ant-design/icons-svg/lib/asn/ExperimentTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-experiment-two-tone')
export default class ExperimentTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'ExperimentTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={ExperimentTwoToneSvg}></AntdIcon>;
  };
}