// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import BranchesOutlinedSvg from '@ant-design/icons-svg/lib/asn/BranchesOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-branches-outlined')
export default class BranchesOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'BranchesOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={BranchesOutlinedSvg}></AntdIcon>;
  };
}