// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SnippetsOutlinedSvg from '@ant-design/icons-svg/es/asn/SnippetsOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-snippets-outlined')
export default class SnippetsOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'SnippetsOutlined';
  static tagName = 'o-snippets-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={SnippetsOutlinedSvg} />;
  };
}