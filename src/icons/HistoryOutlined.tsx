// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import HistoryOutlinedSvg from '@ant-design/icons-svg/lib/asn/HistoryOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-history-outlined')
export default class HistoryOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'HistoryOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={HistoryOutlinedSvg}></AntdIcon>;
  };
}