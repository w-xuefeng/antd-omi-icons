// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import QuestionCircleFilledSvg from '@ant-design/icons-svg/lib/asn/QuestionCircleFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-question-circle-filled')
export default class QuestionCircleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'QuestionCircleFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={QuestionCircleFilledSvg} />;
  };
}