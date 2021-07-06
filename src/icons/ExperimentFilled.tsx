// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ExperimentFilledSvg from '@ant-design/icons-svg/lib/asn/ExperimentFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-experiment-filled')
export default class ExperimentFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'ExperimentFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={ExperimentFilledSvg}></AntdIcon>;
  };
}