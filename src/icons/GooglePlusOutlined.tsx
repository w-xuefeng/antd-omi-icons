// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import GooglePlusOutlinedSvg from '@ant-design/icons-svg/lib/asn/GooglePlusOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-google-plus-outlined')
export default class GooglePlusOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'GooglePlusOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={GooglePlusOutlinedSvg}></AntdIcon>;
  };
}