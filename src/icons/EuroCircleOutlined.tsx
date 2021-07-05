// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import EuroCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/EuroCircleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-euro-circle-outlined')
export default class EuroCircleOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'EuroCircleOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={EuroCircleOutlinedSvg}></AntdIcon>;
  };
}