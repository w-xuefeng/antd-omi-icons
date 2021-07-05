// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import RestTwoToneSvg from '@ant-design/icons-svg/lib/asn/RestTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-rest-two-tone')
export default class RestTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'RestTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={RestTwoToneSvg}></AntdIcon>;
  };
}