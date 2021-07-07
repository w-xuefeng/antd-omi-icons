// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import InfoOutlinedSvg from '@ant-design/icons-svg/lib/asn/InfoOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-info-outlined')
export default class InfoOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'InfoOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={InfoOutlinedSvg} />;
  };
}