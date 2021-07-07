// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DeploymentUnitOutlinedSvg from '@ant-design/icons-svg/lib/asn/DeploymentUnitOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-deployment-unit-outlined')
export default class DeploymentUnitOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'DeploymentUnitOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={DeploymentUnitOutlinedSvg} />;
  };
}