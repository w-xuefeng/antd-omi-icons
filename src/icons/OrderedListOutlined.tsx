// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import OrderedListOutlinedSvg from '@ant-design/icons-svg/lib/asn/OrderedListOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-ordered-list-outlined')
export default class OrderedListOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'OrderedListOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={OrderedListOutlinedSvg}></AntdIcon>;
  };
}