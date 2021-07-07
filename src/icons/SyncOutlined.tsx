// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SyncOutlinedSvg from '@ant-design/icons-svg/lib/asn/SyncOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-sync-outlined')
export default class SyncOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'SyncOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={SyncOutlinedSvg} />;
  };
}