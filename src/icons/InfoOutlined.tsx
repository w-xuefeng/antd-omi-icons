// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import InfoOutlinedSvg from '@ant-design/icons-svg/lib/asn/InfoOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-info-outlined')
export default class InfoOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'InfoOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={InfoOutlinedSvg}></AntdIcon>;
  };
}