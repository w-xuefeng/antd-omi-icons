// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import BranchesOutlinedSvg from '@ant-design/icons-svg/es/asn/BranchesOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-branches-outlined')
export default class BranchesOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'BranchesOutlined';
  static tagName = 'o-branches-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={BranchesOutlinedSvg} />;
  };
}