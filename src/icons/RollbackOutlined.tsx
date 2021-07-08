// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import RollbackOutlinedSvg from '@ant-design/icons-svg/es/asn/RollbackOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-rollback-outlined')
export default class RollbackOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'RollbackOutlined';
  static tagName = 'o-rollback-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={RollbackOutlinedSvg} />;
  };
}