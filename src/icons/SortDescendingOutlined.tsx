// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SortDescendingOutlinedSvg from '@ant-design/icons-svg/lib/asn/SortDescendingOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-sort-descending-outlined')
export default class SortDescendingOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'SortDescendingOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={SortDescendingOutlinedSvg}></AntdIcon>;
  };
}