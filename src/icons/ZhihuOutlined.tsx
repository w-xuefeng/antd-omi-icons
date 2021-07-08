// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ZhihuOutlinedSvg from '@ant-design/icons-svg/es/asn/ZhihuOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-zhihu-outlined')
export default class ZhihuOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ZhihuOutlined';
  static tagName = 'o-zhihu-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={ZhihuOutlinedSvg} />;
  };
}