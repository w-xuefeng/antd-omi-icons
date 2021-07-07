// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ClusterOutlinedSvg from '@ant-design/icons-svg/lib/asn/ClusterOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-cluster-outlined')
export default class ClusterOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ClusterOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={ClusterOutlinedSvg} />;
  };
}