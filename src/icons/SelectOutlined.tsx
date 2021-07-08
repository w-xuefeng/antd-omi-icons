// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SelectOutlinedSvg from '@ant-design/icons-svg/es/asn/SelectOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-select-outlined')
export default class SelectOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'SelectOutlined';
  static tagName = 'o-select-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={SelectOutlinedSvg} />;
  };
}