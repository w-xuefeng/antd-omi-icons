// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SaveOutlinedSvg from '@ant-design/icons-svg/es/asn/SaveOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-save-outlined')
export default class SaveOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'SaveOutlined';
  static tagName = 'o-save-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={SaveOutlinedSvg} />;
  };
}