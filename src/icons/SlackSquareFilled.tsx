// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SlackSquareFilledSvg from '@ant-design/icons-svg/lib/asn/SlackSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-slack-square-filled')
export default class SlackSquareFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'SlackSquareFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={SlackSquareFilledSvg}></AntdIcon>;
  };
}