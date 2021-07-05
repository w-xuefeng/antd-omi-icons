// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CopyrightCircleFilledSvg from '@ant-design/icons-svg/lib/asn/CopyrightCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-copyright-circle-filled')
export default class CopyrightCircleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'CopyrightCircleFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={CopyrightCircleFilledSvg}></AntdIcon>;
  };
}