// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SlackSquareOutlinedSvg from '@ant-design/icons-svg/lib/asn/SlackSquareOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-slack-square-outlined')
export default class SlackSquareOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'SlackSquareOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={SlackSquareOutlinedSvg}></AntdIcon>;
  };
}