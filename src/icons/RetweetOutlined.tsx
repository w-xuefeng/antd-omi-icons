// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import RetweetOutlinedSvg from '@ant-design/icons-svg/es/asn/RetweetOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-retweet-outlined')
export default class RetweetOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'RetweetOutlined';
  static tagName = 'o-retweet-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={RetweetOutlinedSvg} />;
  };
}