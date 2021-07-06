// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import Html5OutlinedSvg from '@ant-design/icons-svg/lib/asn/Html5Outlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-html5-outlined')
export default class Html5Outlined extends OmiComponent<AntdIconProps> {
  static displayName = 'Html5Outlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={Html5OutlinedSvg}></AntdIcon>;
  };
}