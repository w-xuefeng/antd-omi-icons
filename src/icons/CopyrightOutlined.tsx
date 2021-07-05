// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CopyrightOutlinedSvg from '@ant-design/icons-svg/lib/asn/CopyrightOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-copyright-outlined')
export default class CopyrightOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'CopyrightOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={CopyrightOutlinedSvg}></AntdIcon>;
  };
}