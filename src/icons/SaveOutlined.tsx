// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SaveOutlinedSvg from '@ant-design/icons-svg/lib/asn/SaveOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-save-outlined')
export default class SaveOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'SaveOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={SaveOutlinedSvg}></AntdIcon>;
  };
}