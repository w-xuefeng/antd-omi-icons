// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CloseOutlinedSvg from '@ant-design/icons-svg/lib/asn/CloseOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-close-outlined')
export default class CloseOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'CloseOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={CloseOutlinedSvg}></AntdIcon>;
  };
}