// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ImportOutlinedSvg from '@ant-design/icons-svg/lib/asn/ImportOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-import-outlined')
export default class ImportOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ImportOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={ImportOutlinedSvg}></AntdIcon>;
  };
}