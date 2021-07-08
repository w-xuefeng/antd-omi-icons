// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SlackSquareFilledSvg from '@ant-design/icons-svg/es/asn/SlackSquareFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-slack-square-filled')
export default class SlackSquareFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'SlackSquareFilled';
  static tagName = 'o-slack-square-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={SlackSquareFilledSvg} />;
  };
}