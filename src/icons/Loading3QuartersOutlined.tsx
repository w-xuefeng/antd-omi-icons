// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import Loading3QuartersOutlinedSvg from '@ant-design/icons-svg/lib/asn/Loading3QuartersOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-loading3-quarters-outlined')
export default class Loading3QuartersOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'Loading3QuartersOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={Loading3QuartersOutlinedSvg}></AntdIcon>;
  };
}