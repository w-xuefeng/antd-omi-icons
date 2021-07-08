// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import UnorderedListOutlinedSvg from '@ant-design/icons-svg/es/asn/UnorderedListOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-unordered-list-outlined')
export default class UnorderedListOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'UnorderedListOutlined';
  static tagName = 'o-unordered-list-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={UnorderedListOutlinedSvg} />;
  };
}