// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import BehanceCircleFilledSvg from '@ant-design/icons-svg/lib/asn/BehanceCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-behance-circle-filled')
export default class BehanceCircleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'BehanceCircleFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={BehanceCircleFilledSvg}></AntdIcon>;
  };
}