// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DeploymentUnitOutlinedSvg from '@ant-design/icons-svg/lib/asn/DeploymentUnitOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-deployment-unit-outlined')
export default class DeploymentUnitOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'DeploymentUnitOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={DeploymentUnitOutlinedSvg}></AntdIcon>;
  };
}