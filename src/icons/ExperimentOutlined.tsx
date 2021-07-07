// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ExperimentOutlinedSvg from '@ant-design/icons-svg/lib/asn/ExperimentOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-experiment-outlined')
export default class ExperimentOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ExperimentOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={ExperimentOutlinedSvg} />;
  };
}