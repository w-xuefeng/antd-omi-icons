// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import TranslationOutlinedSvg from '@ant-design/icons-svg/lib/asn/TranslationOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-translation-outlined')
export default class TranslationOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'TranslationOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={TranslationOutlinedSvg} />;
  };
}