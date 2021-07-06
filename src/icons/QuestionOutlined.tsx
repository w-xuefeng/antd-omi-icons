// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import QuestionOutlinedSvg from '@ant-design/icons-svg/lib/asn/QuestionOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-question-outlined')
export default class QuestionOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'QuestionOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={QuestionOutlinedSvg}></AntdIcon>;
  };
}