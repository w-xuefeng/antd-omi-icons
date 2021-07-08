// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SlackSquareOutlinedSvg from '@ant-design/icons-svg/es/asn/SlackSquareOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-slack-square-outlined')
export default class SlackSquareOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'SlackSquareOutlined';
  static tagName = 'o-slack-square-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={SlackSquareOutlinedSvg} />;
  };
}