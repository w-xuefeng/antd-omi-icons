// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SnippetsOutlinedSvg from '@ant-design/icons-svg/lib/asn/SnippetsOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-snippets-outlined')
export default class SnippetsOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'SnippetsOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={SnippetsOutlinedSvg}></AntdIcon>;
  };
}