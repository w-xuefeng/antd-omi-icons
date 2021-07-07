// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CiCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/CiCircleOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-ci-circle-outlined')
export default class CiCircleOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'CiCircleOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CiCircleOutlinedSvg} />;
  };
}