// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SlackOutlinedSvg from '@ant-design/icons-svg/lib/asn/SlackOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-slack-outlined')
export default class SlackOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'SlackOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={SlackOutlinedSvg}></AntdIcon>;
  };
}