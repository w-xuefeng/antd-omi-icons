// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SmileOutlinedSvg from '@ant-design/icons-svg/lib/asn/SmileOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-smile-outlined')
export default class SmileOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'SmileOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={SmileOutlinedSvg}></AntdIcon>;
  };
}