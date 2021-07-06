// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import HighlightOutlinedSvg from '@ant-design/icons-svg/lib/asn/HighlightOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-highlight-outlined')
export default class HighlightOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'HighlightOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={HighlightOutlinedSvg}></AntdIcon>;
  };
}