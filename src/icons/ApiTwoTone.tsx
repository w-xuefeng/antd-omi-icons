// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ApiTwoToneSvg from '@ant-design/icons-svg/lib/asn/ApiTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-api-two-tone')
export default class ApiTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'ApiTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={ApiTwoToneSvg}></AntdIcon>;
  };
}