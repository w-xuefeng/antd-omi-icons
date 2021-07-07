// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import LoadingOutlinedSvg from '@ant-design/icons-svg/lib/asn/LoadingOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-loading-outlined')
export default class LoadingOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'LoadingOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={LoadingOutlinedSvg} />;
  };
}