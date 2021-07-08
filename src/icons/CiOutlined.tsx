// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CiOutlinedSvg from '@ant-design/icons-svg/es/asn/CiOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-ci-outlined')
export default class CiOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'CiOutlined';
  static tagName = 'o-ci-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CiOutlinedSvg} />;
  };
}