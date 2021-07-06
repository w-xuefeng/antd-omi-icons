// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ArrowLeftOutlinedSvg from '@ant-design/icons-svg/lib/asn/ArrowLeftOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-arrow-left-outlined')
export default class ArrowLeftOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ArrowLeftOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={ArrowLeftOutlinedSvg}></AntdIcon>;
  };
}