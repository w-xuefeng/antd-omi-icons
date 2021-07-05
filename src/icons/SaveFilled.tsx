// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SaveFilledSvg from '@ant-design/icons-svg/lib/asn/SaveFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-save-filled')
export default class SaveFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'SaveFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={SaveFilledSvg}></AntdIcon>;
  };
}