// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import RollbackOutlinedSvg from '@ant-design/icons-svg/lib/asn/RollbackOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-rollback-outlined')
export default class RollbackOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'RollbackOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={RollbackOutlinedSvg}></AntdIcon>;
  };
}