// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import AliwangwangOutlinedSvg from '@ant-design/icons-svg/lib/asn/AliwangwangOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-aliwangwang-outlined')
export default class AliwangwangOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'AliwangwangOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={AliwangwangOutlinedSvg}></AntdIcon>;
  };
}