// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ExperimentFilledSvg from '@ant-design/icons-svg/es/asn/ExperimentFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-experiment-filled')
export default class ExperimentFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'ExperimentFilled';
  static tagName = 'o-experiment-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={ExperimentFilledSvg} />;
  };
}