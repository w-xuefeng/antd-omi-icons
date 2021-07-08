// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SlackOutlinedSvg from '@ant-design/icons-svg/es/asn/SlackOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-slack-outlined')
export default class SlackOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'SlackOutlined';
  static tagName = 'o-slack-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={SlackOutlinedSvg} />;
  };
}