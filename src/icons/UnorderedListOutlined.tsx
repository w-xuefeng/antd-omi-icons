// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import UnorderedListOutlinedSvg from '@ant-design/icons-svg/lib/asn/UnorderedListOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-unordered-list-outlined')
export default class UnorderedListOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'UnorderedListOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={UnorderedListOutlinedSvg}></AntdIcon>;
  };
}