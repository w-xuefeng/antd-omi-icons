// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import QuestionCircleOutlinedSvg from '@ant-design/icons-svg/es/asn/QuestionCircleOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-question-circle-outlined')
export default class QuestionCircleOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'QuestionCircleOutlined';
  static tagName = 'o-question-circle-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={QuestionCircleOutlinedSvg} />;
  };
}