// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import QuestionOutlinedSvg from '@ant-design/icons-svg/es/asn/QuestionOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-question-outlined')
export default class QuestionOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'QuestionOutlined';
  static tagName = 'o-question-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={QuestionOutlinedSvg} />;
  };
}