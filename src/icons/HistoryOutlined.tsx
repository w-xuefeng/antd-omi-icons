// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import HistoryOutlinedSvg from '@ant-design/icons-svg/es/asn/HistoryOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-history-outlined')
export default class HistoryOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'HistoryOutlined';
  static tagName = 'o-history-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={HistoryOutlinedSvg} />;
  };
}