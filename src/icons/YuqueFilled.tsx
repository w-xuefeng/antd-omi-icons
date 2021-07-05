// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import YuqueFilledSvg from '@ant-design/icons-svg/lib/asn/YuqueFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-yuque-filled')
export default class YuqueFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'YuqueFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={YuqueFilledSvg}></AntdIcon>;
  };
}