// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import AliyunOutlinedSvg from '@ant-design/icons-svg/es/asn/AliyunOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-aliyun-outlined')
export default class AliyunOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'AliyunOutlined';
  static tagName = 'o-aliyun-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={AliyunOutlinedSvg} />;
  };
}