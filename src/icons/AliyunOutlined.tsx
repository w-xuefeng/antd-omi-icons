// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import AliyunOutlinedSvg from '@ant-design/icons-svg/lib/asn/AliyunOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-aliyun-outlined')
export default class AliyunOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'AliyunOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={AliyunOutlinedSvg}></AntdIcon>;
  };
}