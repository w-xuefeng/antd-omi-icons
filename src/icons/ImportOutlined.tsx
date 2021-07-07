// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ImportOutlinedSvg from '@ant-design/icons-svg/lib/asn/ImportOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-import-outlined')
export default class ImportOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ImportOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={ImportOutlinedSvg} />;
  };
}