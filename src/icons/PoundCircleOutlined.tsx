// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import PoundCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/PoundCircleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-pound-circle-outlined')
export default class PoundCircleOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'PoundCircleOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={PoundCircleOutlinedSvg}></AntdIcon>;
  };
}